import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { DataService } from './service/data.service';
import { Message } from './types/message';

const mediaConstraints = {
  audio: true,
  video: { width: 720, height: 540 }
}

const offerOptions = {
  offerToReceiveAudio: true,
  offerToReceiveVideo: true
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewInit {

  @ViewChild('local_video') localVideo!: ElementRef
  @ViewChild('remote_video') remoteVideo!: ElementRef

  private localStream!: MediaStream

  inCall = false
  localVideoActive = false

  private peerConnection!: RTCPeerConnection | undefined;

  constructor(private dataService: DataService) { }

  ngAfterViewInit(): void {
    this.addIncomingMessageHandler()
    this.requestMediaDevices()
  }

  private async requestMediaDevices() {
    this.localStream = await navigator.mediaDevices.getUserMedia(mediaConstraints)
    this.pauseLocalVideo()
  }

  pauseLocalVideo(): void {
    this.localStream.getTracks().forEach(track => {
      track.enabled = false
    })
    this.localVideo.nativeElement.srcObject = undefined
    this.localVideoActive = false
  }

  startLocalVideo(): void {
    this.localStream.getTracks().forEach(track => {
      track.enabled = true
    })
    this.localVideo.nativeElement.srcObject = this.localStream
    this.localVideoActive = true
  }

  private createPeerConnection() {
    this.peerConnection = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            'stun:stun.awt.be:3478',
            // 'stun:stun.voipplanet.nl:3478',
            // 'stun:stun.budgetphone.nl:3478',
            // 'stun:stun.voys.nl:3478',
            // 'stun:stun.solcon.nl:3478',
            // 'stun:stun.xs4all.nl:3478',
          ]
        }
      ]
    })
    this.peerConnection.onicecandidate = this.handleIceCandidateEvent
    this.peerConnection.onicegatheringstatechange = this.handleIceConnectionStateChangeEvent
    this.peerConnection.onsignalingstatechange = this.handleSignalingStateChangeEvent
    this.peerConnection.ontrack = this.handleTrackEvent
  }

  private closeCall(): void {
    if (this.peerConnection) {
      this.peerConnection.onicecandidate = null
      this.peerConnection.onicegatheringstatechange = null
      this.peerConnection.onsignalingstatechange = null
      this.peerConnection.ontrack = null
    }
    if (this.peerConnection != undefined) {
      this.peerConnection.getTransceivers().forEach(transceiver => {
        transceiver.stop()
      })
      this.peerConnection.close()
      this.peerConnection = undefined
    }
  }

  async call(): Promise<void> {
    this.createPeerConnection()
    if (this.peerConnection != undefined) {
      this.localStream.getTracks().forEach(
        track => this.peerConnection!.addTrack(track, this.localStream)
      )

      try {
        const offer: RTCSessionDescriptionInit = await this.peerConnection.createOffer(offerOptions)
        await this.peerConnection.setLocalDescription(offer)

        this.inCall = true

        this.dataService.sendMessage({ type: 'offer', data: offer })
      } catch (error) {
        this.handleGetUserMediaError(error)
      }
    }
  }

  private handleGetUserMediaError(error: Error) {
    switch (error.name) {
      case 'NotFoundError':
        alert('no camera or mic were found')
        break
      case 'SecurityError':
      case 'PermissionDeniedError':
        break
      default:
        console.log(error)
        alert(error.message)
        break
    }
    this.closeCall()
  }

  private handleIceCandidateEvent = (event: RTCPeerConnectionIceEvent) => {
    console.log(event)
    if (event.candidate) {
      this.dataService.sendMessage({
        type: 'ice-candidate',
        data: event.candidate
      })
    }
  }

  private handleIceConnectionStateChangeEvent = (event: Event) => {
    console.log(event)
    switch (this.peerConnection?.iceConnectionState) {
      case 'closed':
      case 'failed':
      case 'disconnected':
        this.closeCall()
        break
    }
  }

  private handleSignalingStateChangeEvent = (event: Event) => {
    console.log(event)
    switch (this.peerConnection?.signalingState) {
      case 'closed':
        this.closeCall()
        break
    }
  }

  private handleTrackEvent = (event: RTCTrackEvent) => {
    console.log(event)
    this.remoteVideo.nativeElement.srcObject = event.streams[0]
  }

  private addIncomingMessageHandler() {
    this.dataService.connect()
    this.dataService.messages$.subscribe(
      msg => {
        switch (msg.type) {
          case 'offer':
            this.handleOfferMessage(msg.data)
            break
          case 'answer':
            this.handleAnswerMessage(msg.data)
            break
          case 'hangup':
            this.handleHangupMessage(msg)
            break
          case 'ice-candidate':
            this.handleIceCandidateMessage(msg.data)
            break
          default:
            console.log('unknown message of type ' + msg.type)
        }
      },
      error => console.log(error)
    )
  }

  private handleOfferMessage(msg: RTCSessionDescriptionInit): void {
    console.log('handling incoming offer...');
    if (!this.peerConnection) {
      this.createPeerConnection();
    }

    if (!this.localStream) {
      this.startLocalVideo();
    }

    this.peerConnection!.setRemoteDescription(new RTCSessionDescription(msg))
      .then(() => {

        this.localVideo.nativeElement.srcObject = this.localStream;

        this.localStream.getTracks().forEach(
          track => this.peerConnection!.addTrack(track, this.localStream)
        );

      }).then(() => {

        return this.peerConnection!.createAnswer();

      }).then((answer) => {

        return this.peerConnection!.setLocalDescription(answer);

      }).then(() => {

        this.dataService.sendMessage({ type: 'answer', data: this.peerConnection!.localDescription });

        this.inCall = true;

      }).catch(this.handleGetUserMediaError);
  }

  private handleAnswerMessage(msg: RTCSessionDescriptionInit): void {
    console.log('handling incoming answer...');
    this.peerConnection!.setRemoteDescription(msg);
  }

  private handleHangupMessage(msg: Message): void {
    console.log(msg);
    this.closeCall();
  }

  private handleIceCandidateMessage(msg: RTCIceCandidate): void {
    const candidate = new RTCIceCandidate(msg);
    this.peerConnection!.addIceCandidate(candidate).catch(this.reportError);
  }

  private reportError = (e: Error) => {
    console.log('got Error: ' + e.name);
    console.log(e);
  }

  hangUp(): void {
    this.dataService.sendMessage({type: 'hangup', data: ''});
    this.closeCall();
    this.inCall = false
  }
}

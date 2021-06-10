import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

const mediaConstraints = {
  audio: true,
  video: {width: 720, height: 540}
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewInit {

  private localStream!: MediaStream;

  @ViewChild('local_video')
  localVideo!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.requestMediaDevices();
  }

  private async requestMediaDevices() {
    this.localStream = await navigator.mediaDevices.getUserMedia(mediaConstraints)
    this.localVideo.nativeElement.srcObject = this.localStream
  }
}

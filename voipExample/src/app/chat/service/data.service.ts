import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/internal-compatibility'
import { Subject } from 'rxjs'
import { webSocket } from 'rxjs/webSocket'
import { Message } from '../types/message'

export const WS_ENDPOINT = 'ws:localhost:8080/socket'
// export const WS_ENDPOINT = 'ws:localhost:8081'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private socket$!: WebSocketSubject<Message> | undefined
  private messagesSubject = new Subject<Message>()
  public messages$ = this.messagesSubject.asObservable()

  constructor() { }

  public connect(): void {
    this.socket$ = this.getNewWebSocket()
    this.socket$.subscribe(
      msg => {
        console.log('received message of type ' + msg.type)
        this.messagesSubject.next(msg)
      }
    )
  }

  sendMessage(msg: Message): void {
    console.log('sending message: ' + msg.type)
    this.socket$?.next(msg)
  }

  private getNewWebSocket(): WebSocketSubject<any> {
    return webSocket({
      url: WS_ENDPOINT,
      openObserver: {
        next: () => {
          console.log('DataService: connection OK')
        }
      },
      closeObserver: {
        next: () => {
          console.log('DataService: connection closed')
          this.socket$ = undefined
          this.connect()
        }
      }
    })
  }
}

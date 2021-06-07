import { Component } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Async'
  callbackExample = 'Example 1'
  observableExample = ''

  color$: any
  colors: any

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'black', 'white']

    this.color$ = of(this.colors)

    new Observable<string>(observer => {
      setTimeout(() => {
        observer.next('In progress')
      }, 2000)

      setTimeout(() => {
        observer.next('Pending')
      }, 4000)

      setTimeout(() => {
        observer.next('Completed')
      }, 6000)
    }).subscribe(data => {
      this.observableExample = data
    }, error => {
      console.error(error);
    })
  }



  constructor() {
    this.changeCallbackExample(this.setCallbackExample1)

    this.onComplete().then(this.setCallbackExample2)
      .then(this.onComplete)
      .then(this.setCallbackExample1)
      .then(this.onComplete)
      .then(this.setCallbackExample2)


  }

  // CALLBACK

  private setCallbackExample1 = () => {
    this.callbackExample = "God created callbacks..."
  }

  private changeCallbackExample(callback: any) {
    setTimeout(() => {
      callback();
    }, 2000)
  }

  // PROMISE

  onComplete() {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 4000)
    })
  }

  private setCallbackExample2 = () => {
    this.callbackExample = "We promised to do better..."
  }

  // OBSERVABLE



}



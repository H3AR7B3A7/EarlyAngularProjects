import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

interface User {
  name: string
  email: string
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Async'
  callbackExample = 'Example 1'
  observableExample = ''
  users$: User[]
  userDetails: User
  userMessage: string

  constructor(private http: HttpClient) {
    this.changeCallbackExample(this.setCallbackExample1)

    this.onComplete().then(this.setCallbackExample2)
      .then(this.onComplete)
      .then(this.setCallbackExample1)
      .then(this.onComplete)
      .then(this.setCallbackExample2)

    this.getUsers().subscribe(data => { // Subscribe to watch for changes
      this.users$ = data
      this.users$.sort((a, b) => a.name.localeCompare(b.name))
    }, error => {
      console.log(error);
    })

    this.viewUser().toPromise() // Will only change once
      .then(
        response => {
          this.userDetails = response
        })
      .catch(
        error => {
          console.log(error)
        })
      .finally(() => {
        this.userMessage = "Details loaded..."
      })
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

  ngOnInit(): void {
    const source = of('red', 'blue', 'black', 'white')
    const source2 = from(['red', 'blue', 'black', 'white'])

    source.subscribe(
      data => console.log(data),
      error => console.log("error"),
      () => console.log("complete")
    )

    source2.subscribe(
      data => console.log(data)
    )

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

  getUsers(): Observable<User[]> { // By default Angular returns Observable object
    return this.http.get<User[]>('https://jsonplaceholder.cypress.io/users')
  }

  viewUser(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.cypress.io/users/1')
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn = false

  constructor() { }

  logIn() {
    console.log('logged in...')
    this.loggedIn = true
  }

  logOut() {
    console.log('logged out...')
    this.loggedIn = false
  }
}

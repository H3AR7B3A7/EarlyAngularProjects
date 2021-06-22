import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/api/auth/'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
const http: HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }))


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false

  constructor(
    private router: Router
  ) { }

  login(username: string, password: string): void {
    http.post(AUTH_API + 'signin', {
      username: username,
      password: password
    }, httpOptions).subscribe((data: any) => {
      console.warn(data)
      window.sessionStorage.removeItem('auth-token')
      window.sessionStorage.setItem('auth-token', data.username)
      window.sessionStorage.removeItem('auth-user')
      window.sessionStorage.setItem('auth-user', JSON.stringify(data))
      this.isLoggedIn = true
      this.router.navigate(['contacts'])
      window.location.reload()
    },
      err => {
        console.warn('Failed to log in due to: ' + err.message)
      })
  }

  logout(): void {
    this.isLoggedIn = false
    window.sessionStorage.removeItem('auth-token')
    window.sessionStorage.removeItem('auth-user')
    this.router.navigate(['contacts/login'])
  }

  checkLoggedInStatus(): void{
    console.warn(sessionStorage.getItem('auth-token'))
    if (sessionStorage.getItem('auth-token') != null) {
      this.isLoggedIn = true
    } else {
      this.router.navigate(['/contacts/login'])
    }
  }
}

import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const http: HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<boolean>()

  hide = true

  form: any = {}
  isLoggedIn = false
  // isLoginFailed = false
  // errorMessage = ''
  // roles: string[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('auth-token')) {
      this.isLoggedIn = true;
      this.redirect()
      // this.roles = this.tokenStorage.getUser().roles
    }
  }

  onSubmit(): void {
    http.post(AUTH_API + 'signin', {
      username: this.form.username,
      password: this.form.password
    }, httpOptions).subscribe((data: any) => {
      window.sessionStorage.removeItem('auth-token')
      window.sessionStorage.setItem('auth-token', data.accessToken)
      window.sessionStorage.removeItem('auth-user')
      window.sessionStorage.setItem('auth-user', JSON.stringify(data))
      // this.isLoginFailed = false
      this.isLoggedIn = true
      this.sendLoginEvent()
      // this.roles = this.tokenStorage.getUser().roles
      console.warn('logged in')
      this.redirect()
    },
      err => {
        // this.isLoginFailed = true;
        // this.reloadPage()
        console.warn('failed to log in')
        // this.errorMessage = err.error.message;
      })
  }

  redirect(): void {
    this.router.navigate(['..'])
  }

  reloadPage(): void {
    window.location.reload()
  }

  sendLoginEvent() :void {
    console.log('event sent 0')
    this.loginEvent.emit(true)
  }
}

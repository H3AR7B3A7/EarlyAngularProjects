import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http'
import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { ContactService } from '../../services/contact.service'

const AUTH_API = 'http://localhost:8080/api/auth/'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
const http: HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }))

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('auth-token')) {
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser().roles
      this.redirect()
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

      this.isLoggedIn = true

      // this.isLoginFailed = false
      // this.roles = this.tokenStorage.getUser().roles

      this.sendLoginEvent() // TODO: We probably want a data sharing service instead of 3 @outputs...
      this.redirect()
      this.reloadPage()
    },
      err => {
        console.warn('failed to log in')
        // this.isLoginFailed = true;
        // this.errorMessage = err.error.message;
      })
  }

  redirect(): void {
    this.router.navigate(['/contacts'])
    // this.reloadPage()
  }

  reloadPage(): void {
    window.location.reload()
  }

  sendLoginEvent(): void { // TODO: We probably want a data sharing service instead of 3 @outputs...
    console.log('event sent 0')
    this.loginEvent.emit(true)
  }
}
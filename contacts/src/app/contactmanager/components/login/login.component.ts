import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<boolean>()

  hide = true

  form: { username: string, password: string } = {
    username: '',
    password: ''
  }

  isLoggedIn = false
  // isLoginFailed = false
  // errorMessage = ''
  // roles: string[] = []

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn) {
      this.isLoggedIn = true
      // this.roles = this.tokenStorage.getUser().roles
      this.redirect()
    }
  }

  onSubmit(): void {
    this.auth.login(this.form.username, this.form.password)
  }

  redirect(): void {
    this.router.navigate(['/contacts'])
  }

  username = new FormControl('', [Validators.required])

  getUsernameErrorMessage(): string {
    return 'You must enter a value'
  }

  password = new FormControl('', [Validators.required])

  getPasswordErrorMessage(): string {
    return 'You must enter a value'
  }
}

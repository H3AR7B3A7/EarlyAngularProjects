import { Component, OnInit, Output, EventEmitter } from '@angular/core'
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

  form: any = {}
  isLoggedIn = false
  // isLoginFailed = false
  // errorMessage = ''
  // roles: string[] = []

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('auth-token')) {
      this.isLoggedIn = true;
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
}

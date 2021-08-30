import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { AuthService } from './auth.service'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In'

  maskUsername: boolean
  sub: Subscription

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.sub = this.store.select('user').subscribe(
      user => {
        if (user) {
          this.maskUsername = user.maskUsername
        }
      }
    )
  }

  cancel(): void {
    this.router.navigate(['welcome'])
  }

  checkChanged(): void {
    // this.maskUsername = !this.maskUsername
    this.store.dispatch(
      { type: '[User] Toggle Username Mask' }
    )
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName
      const password = loginForm.form.value.password
      this.authService.login(userName, password)

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl)
      } else {
        this.router.navigate(['/products'])
      }
    }
  }
}

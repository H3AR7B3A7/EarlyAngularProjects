import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import { AuthService } from './auth.service'
import { getMaskUsername, State } from './state/user.reducer'
import * as UserActions from './state/user.actions'


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In'

  maskUsername: boolean

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    // TODO : Unsubscribe
    console.log('init')
    this.store.select(getMaskUsername).subscribe(brol => {
      console.log('maskUsername', brol)
      this.maskUsername = brol
    })
  }

  cancel(): void {
    this.router.navigate(['welcome'])
  }

  checkChanged(): void {
    // this.maskUsername = !this.maskUsername
    this.store.dispatch(UserActions.maskUsername())
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

import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import { AuthService } from './auth.service'
import { getMaskUsername, State } from './state/user.reducer'
import * as UserActions from './state/user.actions'
import { Observable } from 'rxjs'


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In'

  maskUsername$: Observable<boolean>

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.maskUsername$ = this.store.select(getMaskUsername)
  }

  cancel(): void {
    this.router.navigate(['welcome'])
  }

  checkChanged(): void {
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

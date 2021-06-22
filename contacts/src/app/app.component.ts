import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contacts'
  isDarkTheme: boolean = false
  isLoggedIn: boolean = true

  constructor(private router: Router) { }

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "dark" ? true : false
    this.checkLoggedInStatus()
  }

  storeThemeSelection(): void {
    localStorage.setItem('theme', this.isDarkTheme ? "dark" : "light")
  }

  logout(): void {
    this.isLoggedIn = false
    window.sessionStorage.removeItem('auth-token')
    window.sessionStorage.removeItem('auth-user')
    this.router.navigate(['contacts/login'])
    this.reloadPage()
  }

  // receiveLoginEvent($event: any) {
  //   console.log('event received 2')
  //   this.checkLoggedInStatus()
  // }

  checkLoggedInStatus():void{ // should be a service
    console.warn(sessionStorage.getItem('auth-token'))
    if (sessionStorage.getItem('auth-token') != null) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }

  reloadPage(): void {
    window.location.reload()
  }
}

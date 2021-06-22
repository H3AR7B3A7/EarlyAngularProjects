import { Component } from '@angular/core'
import { AuthService } from './contactmanager/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contacts'
  isDarkTheme: boolean = false
  isLoggedIn: boolean = true

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "dark" ? true : false
    this.auth.checkLoggedInStatus()
    this.isLoggedIn = this.auth.isLoggedIn
  }

  storeThemeSelection(): void {
    localStorage.setItem('theme', this.isDarkTheme ? "dark" : "light")
  }

  logout(): void {
    this.isLoggedIn = false
    this.auth.logout()
  }
}

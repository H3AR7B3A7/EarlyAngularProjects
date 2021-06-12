import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contacts'
  isDarkTheme: boolean = false
  isLoggedIn: boolean = false

  constructor(private router: Router) { }

  ngOnInit() {

    this.isDarkTheme = localStorage.getItem('theme') === "dark" ? true : false
    if (sessionStorage.getItem('auth-token')) {
      this.isLoggedIn = true;
    }
  }

  storeThemeSelection(): void {
    localStorage.setItem('theme', this.isDarkTheme ? "dark" : "light")
  }

  logout(): void {
    this.isLoggedIn = false
    window.sessionStorage.removeItem('auth-token')
    window.sessionStorage.removeItem('auth-user')
    this.router.navigate(['contacts/login'])
  }

  receiveLoginEvent($event: any) {
    console.log('event received 2')
    this.isLoggedIn=true
  }

}

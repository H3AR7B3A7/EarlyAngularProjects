import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contacts';
  isDarkTheme: boolean = false;

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "dark" ? true : false
  }

  storeThemeSelection(): void {
    localStorage.setItem('theme', this.isDarkTheme ? "dark" : "light")
  }
}

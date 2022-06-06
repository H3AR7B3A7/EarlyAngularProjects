import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  volume = 0

  path = './assets/images/eSATURN_logo_RGB.svg'

  size0 = 20
  size1 = 30
  size2 = 40
  size3 = 50
  size4 = 60
  size5 = 70
  size6 = 80

  ngOnInit() {
    setInterval(() => {
      this.volume = Math.floor(Math.random() * 100)
    }, 1000)
  }
}

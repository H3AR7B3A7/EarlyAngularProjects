import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  volume0 = 100
  volume1 = 70
  volume2 = 60
  volume3 = 55
  volume4 = 40
  volume5 = 30
  volume6 = 20
  volume7 = 10
  volume8 = 0

  path = './assets/images/e.png'

  ngOnInit() {
    setInterval(() => {
      this.volume8 = Math.floor(Math.random() * 80)
    }, 1000)
  }
}

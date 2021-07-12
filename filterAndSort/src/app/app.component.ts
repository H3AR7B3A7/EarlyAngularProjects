import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filterAndSort';

  pirates = [
    {
      name: 'Oden',
      position: 1,
      date: new Date("1982-05-06"),
    },
    {
      name: 'Sanji',
      position: 2,
      date: new Date("1995-07-02"),
    },
    {
      name: 'Nami',
      position: 3,
      date: new Date("1996-06-15"),
    },
    {
      name: 'Luffy',
      position: 1,
      date: new Date("1998-10-07"),
    },
    {
      name: 'Zoro',
      position: 2,
      date: new Date("1995-09-11"),
    },
    {
      name: 'Nico',
      position: 3,
      date: new Date("1991-03-24"),
    },
    {
      name: 'Usopp',
      position: 3,
      date: new Date("1994-09-15"),
    },
    {
      name: 'Brook',
      position: 3,
      date: new Date("1854-07-01"),
    },
    {
      name: 'Chopper',
      position: 3,
      date: new Date("2004-11-03"),
    },
  ]
}

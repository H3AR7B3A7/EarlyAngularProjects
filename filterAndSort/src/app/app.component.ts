import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filterAndSort';
  filteredBy: 0 | 1 | 2 | 3 = 0
  sortedBy: 'name' | 'date' | undefined

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

  filteredPirates = [...this.pirates]

  filterPirates(position: 0 | 1 | 2 | 3) {
    this.filteredBy = position
    if (position == 0) {
      this.filteredPirates = this.pirates
    } else {
      this.filteredPirates = this.pirates.filter(p => p.position == position)
    }
  }

  sortPirates(value: 'name' | 'date') {
    this.sortedBy = value
    if (value == 'name') {
      this.filteredPirates = this.filteredPirates.sort((p1, p2) => sortByNameAsc(p1, p2))
    } else {
      this.filteredPirates.sort((p1, p2) => sortByDateDesc(p1, p2))
    }
  }
}

function sortByNameAsc(p1: any, p2: any): any {
  if (p1.name > p2.name) return 1
  else if (p1.name === p2.name) return 0
  else return -1
}

function sortByDateDesc(p1: any, p2: any) {
  if (p1.date < p2.date) return 1
  else if (p1.date === p2.date) return 0
  else return -1
}

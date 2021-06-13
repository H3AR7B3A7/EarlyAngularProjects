import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './models/Hero';
import { HeroService } from './services/hero.service';

const request = new XMLHttpRequest()
const url = 'https://jsonplaceholder.cypress.io/users'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fakeApi';
  result = ''

  heroes: Hero[] = []

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {

    // WITHOUT HTTP CLIENT
    request.addEventListener("load", () => {
      if (request.readyState === 4 && request.status === 200){
        console.log(request.responseText)
      } else {
        console.log('An error has occurred')
      }
    })
    request.open("GET", url)
    request.send()

    // WITH OBSERVABLE
    const request$ = new Observable(observer => {
      request.addEventListener("load", () => {
        if (request.readyState === 4 && request.status === 200) {
          observer.next(request.responseText)
          observer.complete()
        } else {
          observer.error('An error has occurred')
        }
      })
      request.open("GET", url)
      request.send()
    }).subscribe((data) => {
      console.log(data)
    })

    // WITH ANGULAR HTTP CLIENT
    this.getHeroes()
  }

  private getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
}

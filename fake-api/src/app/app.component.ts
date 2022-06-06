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

  private getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  add(name: string, team: string): void{
    this.heroService.createHero(name, team).subscribe(hero =>
      this.heroes.push(hero))
  }

  edit(hero: Hero): void {
    const existingHero = {id: hero.id, name: 'Captain America', team:'Avengers'}
    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      this.heroes.find(hero => hero.id)!.name = 'Captain America'
      this.heroes.find(hero => hero.id)!.team = 'Avengers'
    })
  }

  remove(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter(selected => selected !== hero)
    })
  }
}

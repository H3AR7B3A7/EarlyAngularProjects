import { Component, OnInit } from '@angular/core';
import { heroes, Hero } from 'src/app/heroes/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  listOfHeroes0: Hero[] = [...heroes];
  listOfHeroes1: Hero[] = [...heroes];

  identify(index: number, hero: Hero): number {
    return hero.id;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

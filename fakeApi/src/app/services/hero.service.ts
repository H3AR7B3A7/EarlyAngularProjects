import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/Hero';

const heroesUrl ='api/heroes/'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(heroesUrl)
  }

  createHero(name: string, team: string): Observable<Hero> {
    const hero = { name, team}
    return this.http.post<Hero>(heroesUrl, hero)
  }

  editHero(id: number, hero: Hero): Observable<any> {
    return this.http.put<Hero[]>(heroesUrl + id, hero)
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete<Hero[]>(heroesUrl + id)
  }
}

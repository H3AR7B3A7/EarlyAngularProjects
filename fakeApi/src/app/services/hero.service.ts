import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('api/heroes')
  }
}

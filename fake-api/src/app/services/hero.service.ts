import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { Hero } from '../models/Hero';

const heroesUrl ='api/heroes/'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient
  ) { }

  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(heroesUrl, {
  //     headers : new HttpHeaders({'Authorization': 'Bearer ' + this.getToken()})
  //   })
  // }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(heroesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error)
        return throwError(error)
      })
    )
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

  private getToken(): string {
    return 'myToken' // Get token from browser storage
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { IUser } from './user.model'

@Injectable()
export class AuthService {
  currentUser: IUser

  constructor(
    private http: HttpClient
  ) { }

  loginUser(userName: string, password: string): Observable<any> {

    const loginInfo = { username: userName, password: password }

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = data['user'] as IUser
      }))
      .pipe(catchError(err => {
        return of(false)
      }))
  }

  isAuthenticated(): boolean {
    return !!this.currentUser
  }

  checkAuthenticationStatus(): void {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = data as IUser
        }
      }))
      .subscribe()
  }

  updateCurrentUser(firstName: string, lastName: string): Observable<any> {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options)
  }

  logout(): Observable<any> {
    this.currentUser = undefined
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

    return this.http.post('/api/logout', {}, options)
  }
}

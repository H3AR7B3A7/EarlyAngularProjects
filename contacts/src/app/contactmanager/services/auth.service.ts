import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import jwt_decode, { JwtPayload } from 'jwt-decode'

const AUTH_API = 'http://localhost:8080/api/auth/'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
const http: HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }))


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false
  // jwtToken: any  // e.g. {"sub": "steven", "iat": 1624359332, "exp": 1624445732}

  constructor(
    private router: Router
  ) { }

  login(username: string, password: string): void {
    http.post(AUTH_API + 'signin', {
      username: username,
      password: password
    }, httpOptions).subscribe((data: any) => {
      window.sessionStorage.setItem('auth-object', JSON.stringify(data))
      this.isLoggedIn = true
      window.location.reload() // TODO: Find cleaner way
    },
      err => {
        console.warn('Failed to log in due to: ' + err.message)
      })
  }

  logout(): void {
    this.isLoggedIn = false
    window.sessionStorage.removeItem('auth-object')
    this.router.navigate(['contacts/login'])
    window.location.reload() // TODO: Find cleaner way
  }

  checkLoggedInStatus(): void {
    const jwt = this.decodedJwt()
    if (jwt) {
      if (sessionStorage.getItem('auth-object') != null && jwt.exp as number > Date.now() / 1000) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
        this.router.navigate(['/contacts/login'])
      }
    }
  }

  private decodedJwt(): JwtPayload | null {
    const authObject = sessionStorage.getItem('auth-object')
    let jwt
    if (authObject) {
      jwt = JSON.parse(authObject)
      try {
        return jwt_decode(jwt.token)
      }
      catch (Error) {
        return null
      }
    }
    return null
  }
}

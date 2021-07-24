import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.getToken()
      }
    })
    return next.handle(authReq)
  }


  getToken(): string {
    let data: any = window.sessionStorage.getItem('auth-object')
    if (data) {
      data = JSON.parse(data)
    }
    return data.token
  }
}

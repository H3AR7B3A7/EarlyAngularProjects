import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { UserSettings } from './user-settings'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['daily', 'annually', 'monthly', 'yearly'])
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {

    return this.http.post('https://eny3pemo4lxf6r6.m.pipedream.net', userSettings)

    // return of(userSettings)
  }
}

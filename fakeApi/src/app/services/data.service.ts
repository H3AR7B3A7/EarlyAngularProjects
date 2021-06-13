import { Injectable } from '@angular/core'
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return {
      heroes: [
        {
          id: 0,
          name: 'Spiderman',
          team: 'Avengers'
        },
        {
          id: 1,
          name: 'Flash',
          team: 'Justice League'
        },
        {
          id: 2,
          name: 'Ironman',
          team: 'Avengers'
        },
        {
          id: 3,
          name: 'Superman',
          team: 'Justice League'
        },
        {
          id: 4,
          name: 'Hulk',
          team: 'Avengers'
        },
        {
          id: 5,
          name: 'Batman',
          team: 'Justice League'
        },
      ]
    }
  }
}

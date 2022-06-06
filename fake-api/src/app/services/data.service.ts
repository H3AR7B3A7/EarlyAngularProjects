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
          id: 1,
          name: 'Spiderman',
          team: 'Avengers'
        },
        {
          id: 2,
          name: 'Flash',
          team: 'Justice League'
        },
        {
          id: 3,
          name: 'Ironman',
          team: 'Avengers'
        },
        {
          id: 4,
          name: 'Superman',
          team: 'Justice League'
        },
        {
          id: 5,
          name: 'Hulk',
          team: 'Avengers'
        },
        {
          id: 6,
          name: 'Batman',
          team: 'Justice League'
        },
      ]
    }
  }
}

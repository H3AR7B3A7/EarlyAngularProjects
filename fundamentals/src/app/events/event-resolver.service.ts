import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable } from 'rxjs'
import { IEvent } from './shared'
import { EventService } from './shared/event.service'

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(
    private eventService: EventService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IEvent> {
    const key = 'id'
    return this.eventService.getEvent(route.params[key])
  }
}

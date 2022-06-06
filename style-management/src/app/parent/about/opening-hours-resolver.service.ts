import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { OpeningHoursService } from './opening-hours.service'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OpeningHoursResolverService implements Resolve<any> {

  constructor(
    private openingHourService: OpeningHoursService
  ) { }

  resolve() {
    return this.openingHourService.getOpeningHours().pipe(map(hours => hours))
  }
}

import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OpeningHoursService {

  // FAKE ASYNC CALL
  getOpeningHours() {
    let subject = new Subject()
    setTimeout(() => {
      subject.next(OPENINGHOURS)
      subject.complete()
    }, 2000)
    return subject
  }

  getDayHours(day: string): any {
    return OPENINGHOURS.find(value => value.day == day)
  }
}

const OPENINGHOURS = [
  { day: "monday", hours: "8h - 20h" },
  { day: "tuesday", hours: "8h - 16h" },
  { day: "wednesday", hours: "8h - 12h" },
  { day: "thursday", hours: "8h - 16h" },
  { day: "friday", hours: "8h - 16h" },
]

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private firstChildTitle = new BehaviorSubject('')
  currentFirstChildTitle = this.firstChildTitle.asObservable()

  changeFirstChildTitle(newTile: string) {
    this.firstChildTitle.next(newTile)
  }
}

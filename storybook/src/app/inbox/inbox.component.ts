import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
})
export class InboxComponent {
  error$: Observable<boolean>;

  constructor(private store: Store) {
    this.error$ = store.select((state) => state.taskbox.error);
  }
}

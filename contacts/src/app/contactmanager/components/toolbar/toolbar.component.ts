import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { ActivatedRoute, ActivationEnd, Router, RoutesRecognized } from '@angular/router'
import { ContactService } from '../../services/contact.service'
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>()

  currentListId: number = 0

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter(e => (e instanceof ActivationEnd) && (Object.keys(e.snapshot.params).length > 0)),
        map(e => e instanceof ActivationEnd ? e.snapshot.params : {})
      )
      .subscribe(params => {
        this.currentListId = params['id']
      });
  }

  ngOnInit(): void {
  }

  openDeleteListModal(): void {

  }

  deleteList(): void {
    console.warn(this.currentListId)
    this.contactService.deleteContactList(this.currentListId)
    window.location.reload() // TODO: Find cleaner way
  }
}

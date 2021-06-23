import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../../models/Contact';
import { AuthService } from '../../services/auth.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  contacts$?: Observable<Contact[]>
  contacts: Contact[] = []
  currentListId: number = 0

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private auth: AuthService,
    private router: Router
  ) {
    router.events.subscribe(() => this.loadContactsForList())
  }

  ngOnInit(): void {
    this.auth.checkLoggedInStatus()

    this.contacts$ = this.contactService.contacts
    this.contacts$.subscribe(data => {
      this.contacts = data
    })
  }

  loadContactsForList() {
    this.route.params.subscribe(params => {
      const listId = params['id']

      if (listId != this.currentListId && listId != null) {
        this.currentListId = listId
        this.contactService.loadContacts(listId)
      }
    })
  }
}

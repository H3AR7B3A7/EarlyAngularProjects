import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../../models/Contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  contacts$?: Observable<Contact[]>
  contacts: Contact[] = []

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const listId = params['id']

      this.contacts$ = this.contactService.contacts
      this.contacts$.subscribe(data => {
        this.contacts = data
      })

      let data: any = null
      if (data = window.sessionStorage.getItem('auth-user')) {
        data = JSON.parse(data)
        this.contactService.loadContacts(listId, data.token)
      }
    })
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  contacts$?: Observable<Contact[]>

  currentListId: number = 0

  displayedColumns: string[] = ['name', 'email', 'number', 'delete']
  contacts!: MatTableDataSource<Contact>

  title: string = 'Contacts'

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private auth: AuthService,
    private router: Router,
  ) {
    this.router.events.subscribe(() => this.loadContactsForList())
  }

  ngOnInit(): void {
    this.auth.checkLoggedInStatus()

    this.contacts$ = this.contactService.contacts
    this.contacts$.subscribe(data => {
      this.contacts = new MatTableDataSource<Contact>(data)
      this.contacts.sort = this.sort
      this.contacts.paginator = this.paginator
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.contacts.filter = filterValue.trim().toLowerCase();
  }

  private loadContactsForList() {
    this.route.params.subscribe(params => {
      const listId = params['id']

      if (listId != this.currentListId && listId != null) {
        this.currentListId = listId
        this.contactService.loadContacts(listId)

        this.title = this.contactService.dataStore.contactLists.find(v => v.id == listId)?.name || 'Contacts'
      }
    })
  }

  deleteContact(contactId: number) {
    this.contactService.deleteContact(contactId)
    window.location.reload()
  }
}

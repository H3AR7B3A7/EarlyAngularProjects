import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  contacts$?: Observable<Contact[]>

  currentListId: number = 0

  displayedColumns: string[] = ['name', 'email', 'number']
  contacts!: MatTableDataSource<Contact>

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
      this.contacts.paginator = this.paginator
    })
  }

  private loadContactsForList() {
    this.route.params.subscribe(params => {
      const listId = params['id']

      if (listId != this.currentListId && listId != null) {
        this.currentListId = listId
        this.contactService.loadContacts(listId)
      }
    })
  }
}

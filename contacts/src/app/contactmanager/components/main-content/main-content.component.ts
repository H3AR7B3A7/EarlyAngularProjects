import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
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

  closeModal: string | undefined
  isDarkTheme!: boolean

  contactToDelete?: number

  contactSubscription!: Subscription

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private auth: AuthService,
    private router: Router,
    private modalService: NgbModal,
  ) {
    this.router.events.subscribe(() => this.loadContactsForList())
  }

  ngOnInit(): void {
    this.auth.checkLoggedInStatus()

    this.contactService.contacts.subscribe(data => {
      this.contacts = new MatTableDataSource<Contact>(data)
      this.contacts.sort = this.sort
      this.contacts.paginator = this.paginator
    })
  }

  ngOnDestroy(): void {
    this.contactSubscription.unsubscribe()
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

        this.title = this.contacts.data.find(v => v.id == listId)?.name || 'Contacts'
      }
    })
  }

  openDeleteContactModal(content: any, contactToDelete: number): void {
    this.contactToDelete = contactToDelete
    this.isDarkTheme = localStorage.getItem('theme') == 'dark' ? true : false
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  deleteContact() {
    this.contactService.deleteContact(this.contactToDelete!)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Contact } from '../models/Contact'
import { ContactList } from '../models/ContactList'

const API = 'http://localhost:8080/api/contacts/'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _contactLists: BehaviorSubject<ContactList[]> = new BehaviorSubject<ContactList[]>([])
  private _contacts: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([])

  dataStore: {
    contacts: Contact[],
    contactLists: ContactList[]
  } = { contacts: [], contactLists: [] }

  constructor(private http: HttpClient) { }


  // CONTACT LISTS

  get contactLists(): Observable<ContactList[]> {
    return this._contactLists.asObservable()
  }

  loadContactLists(userId: number) {
    this.http.get<ContactList[]>(API + 'lists/' + userId)
      .subscribe(data => {
        this.dataStore.contactLists = data
        this._contactLists.next(Object.assign({}, this.dataStore).contactLists)
      }, error => {
        console.warn("Failed to fetch contact lists!")
      })
  }

  addContactList(contactList: ContactList) {
    this.http.post<ContactList>(API + 'lists/', contactList)
      .subscribe((data: ContactList) => {
        this.dataStore.contactLists.push(data)
      }, error => {
        console.warn("Failed to add list!")
      })
  }

  deleteContactList(listId: number) {
    this.http.delete<ContactList[]>(API + 'delete/lists/' + listId)
      .subscribe(() => {
        this.dataStore.contactLists.forEach((c, i) => {
          if (c.id == listId) {
            this.dataStore.contactLists.splice(i, 1);
          }
        })
      }, error => {
        console.warn("Failed to delete contact list!")
      })
  }


  // CONTACTS

  get contacts(): Observable<Contact[]> {
    return this._contacts.asObservable()
  }

  loadContacts(listId: number) {
    this.http.get<Contact[]>(API + listId)
      .subscribe(data => {
        this.dataStore.contacts = data
        this._contacts.next(Object.assign({}, this.dataStore).contacts)
      }, error => {
        console.warn("Failed to fetch contacts!")
      })
  }

  addContact(contact: Contact) {
    this.http.post<Contact>(API, contact)
      .subscribe(data => {
        this.dataStore.contacts.push(data)
      }, error => {
        console.warn("Failed to add contact!")
      })
  }

  deleteContact(contactId: number) {
    this.http.delete<Contact[]>(API + 'delete/' + contactId)
      .subscribe(() => {
        this.dataStore.contacts.forEach((c, i) => {
          if (c.id == contactId) {
            this.dataStore.contacts.splice(i, 1);
          }
        })
      }, error => {
        console.warn("Failed to delete contact!")
      })
  }
}

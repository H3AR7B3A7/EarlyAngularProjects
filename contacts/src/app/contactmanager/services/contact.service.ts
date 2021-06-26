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

  private _contactLists: BehaviorSubject<ContactList[]>
  private _contacts: BehaviorSubject<Contact[]>

  dataStore: {
    contacts: Contact[],
    contactLists: ContactList[]
  }

  constructor(private http: HttpClient) {
    this.dataStore = { contacts: [], contactLists: [] }
    this._contactLists = new BehaviorSubject<ContactList[]>([])
    this._contacts = new BehaviorSubject<Contact[]>([])
  }

  loadContactLists(userId: number) {
    return this.http.get<ContactList[]>(API + 'lists/' + userId)
      .subscribe(data => {
        this.dataStore.contactLists = data
        this._contactLists.next(Object.assign({}, this.dataStore).contactLists) // ???
      }, error => {
        console.warn("Failed to fetch contact lists!")
      })
  }

  get contactLists(): Observable<ContactList[]> {
    return this._contactLists.asObservable()
  }

  addContactList(contactList: ContactList) {
    return this.http.post<ContactList>(API + 'lists/', contactList)
      .subscribe(data => {
        this.dataStore.contactLists.push(data)
        this._contactLists.next(Object.assign({}, this.dataStore).contactLists) // ???
      }, error => {
        console.warn("Failed to add list!")
      })
  }

  deleteContactList(listId: number) {
    return this.http.delete<ContactList[]>(API + 'delete/lists/' + listId)
      .subscribe(() => {
        delete this.dataStore.contactLists[listId]
        this._contactLists.next(Object.assign({}, this.dataStore).contactLists) // ???
      })
  }



  loadContacts(listId: number) {
    return this.http.get<Contact[]>(API + listId)
      .subscribe(data => {
        this.dataStore.contacts = data
        this._contacts.next(Object.assign({}, this.dataStore).contacts) // ???
      }, error => {
        console.warn("Failed to fetch contacts!")
      })
  }

  get contacts(): Observable<Contact[]> {
    return this._contacts.asObservable()
  }

  addContact(contact: Contact) {
    return this.http.post<Contact>(API, contact)
      .subscribe(data => {
        this.dataStore.contacts.push(data)
        this._contacts.next(Object.assign({}, this.dataStore).contacts) // ???
      }, error => {
        console.warn("Failed to add contact!")
      })
  }

  deleteContact(contactId: number) {
    return this.http.delete<Contact[]>(API + 'delete/' + contactId)
      .subscribe(() => {
        delete this.dataStore.contacts[contactId]
        this._contacts.next(Object.assign({}, this.dataStore).contacts)  // ???
        // const index = this.dataStore.contacts.indexOf(this.dataStore.contacts[contactId], 0)
        // if (index > -1) {
        //   this.dataStore.contacts.splice(index, 1)
        // }
      })
  }
}

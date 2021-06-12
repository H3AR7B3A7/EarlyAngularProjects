import { HttpClient, HttpHeaders } from '@angular/common/http'
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

  private dataStore: {
    contacts: Contact[],
    contactLists: ContactList[]
  }

  constructor(private http: HttpClient) {
    this.dataStore = { contacts: [], contactLists: []}
    this._contactLists = new BehaviorSubject<ContactList[]>([])
    this._contacts = new BehaviorSubject<Contact[]>([])
  }

  loadContactLists(userId : number, token: string) {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token }
      )
    }
    return this.http.get<ContactList[]>(API + 'lists/' + userId, httpOptions)
      .subscribe(data => {
        this.dataStore.contactLists = data
        this._contactLists.next(Object.assign({}, this.dataStore).contactLists)
      }, error => {
        console.warn("Failed to fetch contact lists!");
      })
  }

  get contactLists(): Observable<ContactList[]> {
    return this._contactLists.asObservable()
  }

  loadContacts(listId: number, token: string){
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token }
      )
    }
    return this.http.get<Contact[]>(API + listId, httpOptions)
      .subscribe(data => {
        this.dataStore.contacts = data
        this._contacts.next(Object.assign({}, this.dataStore).contacts)
      }, error => {
        console.warn("Failed to fetch contacts!");
      })
  }

  get contacts(): Observable<Contact[]> {
    return this._contacts.asObservable()
  }
}

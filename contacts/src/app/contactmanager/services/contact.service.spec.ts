import { ContactService } from './contact.service'
import { Contact } from '../models/Contact'
import { ContactList } from '../models/ContactList'
import { getTestBed, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('ContactService', () => {
  let injector: TestBed
  let contactService: ContactService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    })
    injector = getTestBed()
    contactService = injector.inject(ContactService)
    httpMock = injector.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
  })

  describe('loadContactLists', () => {
    it('Should make GET request to right URI>', () => {
      const userId = 1

      contactService.loadContactLists(userId)

      const req = httpMock.expectOne(contactService.API + 'lists/' + userId)
      expect(req.request.method).toBe('GET')
    })
  })

  describe('addContactList', () => {
    it('Should add a ContactList', () => {
      const newList: ContactList = { id: 4, userId: 1, name: 'list4' }

      contactService.addContactList(newList)
      // contactService.contactLists.subscribe(() => {
      //   expect(contactService.dataStore.contactLists.length).toBe(1)
      // })
    })
  })
})

const CONTACT_LISTS: ContactList[] = [
  {
    id: 1,
    userId: 1,
    name: 'list1'
  },
  {
    id: 2,
    userId: 1,
    name: 'list2'
  },
  {
    id: 3,
    userId: 2,
    name: 'list3'
  },
]

const CONTACTS: Contact[] = [
  {
    id: 1,
    contactListId: 1,
    name: 'c1',
    email: 'c1@mail.com',
    number: '123'
  },
  {
    id: 2,
    contactListId: 1,
    name: 'c2',
    email: 'c2@mail.com',
    number: '234'
  },
  {
    id: 3,
    contactListId: 1,
    name: 'c3',
    email: 'c3@mail.com',
    number: '345'
  },
]

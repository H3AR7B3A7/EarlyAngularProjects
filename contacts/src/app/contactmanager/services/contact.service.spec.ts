import { ContactService } from './contact.service'
import { Contact } from '../models/Contact'
import { ContactList } from '../models/ContactList'
import { TestBed, getTestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'

describe('ContactService: ContactLists', () => {
  let injector: TestBed
  let contactService: ContactService
  let contactServiceMock: ContactService
  let httpMock: HttpTestingController
  let mockHttp: unknown

  beforeEach(() => {
    mockHttp = {
      get: (s: string) => {
        return of(CONTACT_LISTS.filter(list => list.userId === +s.substring(s.length - 1, s.length)))
      },
      post: (s: string, l: ContactList) => {
        return of(l)
      },
      delete: (s: string) => {
        return of(CONTACT_LISTS.filter(list => list.id !== +s.substring(s.length - 1, s.length)))
      }
    }

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    })
    injector = getTestBed()
    contactService = injector.inject(ContactService)
    contactServiceMock = new ContactService(mockHttp as HttpClient)
    httpMock = injector.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
  })

  describe('loadContactLists', () => {
    it('Should make a GET request to the right URI.', () => {
      const userId = 1

      contactService.loadContactLists(userId)

      const req = httpMock.expectOne(contactService.API + 'lists/' + userId)
      expect(req.request.method).toBe('GET')
    })

    it('Should populate data store', () => {
      const userId = 1

      contactServiceMock.loadContactLists(userId)

      contactServiceMock.contactLists.subscribe(lists => {
        expect(lists.length).toBe(2)
        expect(lists).toEqual(CONTACT_LISTS.filter(list => list.userId === userId))
        expect(contactServiceMock.dataStore.contactLists.length).toBe(2)
      })
    })
  })

  describe('addContactList', () => {
    it('Should make a POST request to the right URI.', () => {
      const newList: ContactList = { id: 4, userId: 1, name: 'list4' }

      contactService.addContactList(newList)

      const req = httpMock.expectOne(contactService.API + 'lists/')
      expect(req.request.method).toBe('POST')
    })

    it('Should add a ContactList to data store', () => {
      const newList: ContactList = { id: 4, userId: 1, name: 'list4' }

      contactServiceMock.addContactList(newList)

      contactServiceMock.contactLists.subscribe(() => {
        expect(contactServiceMock.dataStore.contactLists.length).toBe(1)
        expect(contactServiceMock.dataStore.contactLists).toEqual([newList])
      })
    })
  })

  describe('deleteContactList', () => {
    it('Should make a DELETE request to the right URI.', () => {
      const id = 1

      contactService.deleteContactList(id)

      const req = httpMock.expectOne(contactService.API + 'lists/' + id)
      expect(req.request.method).toBe('DELETE')
    })

    it('Should remove a ContactList from the data store', () => {
      const id = 1

      contactServiceMock.dataStore.contactLists = [...CONTACT_LISTS]
      contactServiceMock.deleteContactList(id)

      contactServiceMock.contactLists.subscribe(() => {
        expect(contactServiceMock.dataStore.contactLists.length).toBe(2)
        expect(contactServiceMock.dataStore.contactLists).toEqual(CONTACT_LISTS.filter(l => l.id !== id))
      })
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

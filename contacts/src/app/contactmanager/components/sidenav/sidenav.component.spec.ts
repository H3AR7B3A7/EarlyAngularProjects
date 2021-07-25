import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'
import { Observable } from 'rxjs'
import { ContactList } from '../../models/ContactList'
import { AuthService } from '../../services/auth.service'
import { ContactService } from '../../services/contact.service'
import { SidenavComponent } from './sidenav.component'

describe('SideNavComponent', () => {
  let mockAuthService: unknown
  let mockContactService: unknown
  let fixture: ComponentFixture<SidenavComponent>
  let component: SidenavComponent
  let element: HTMLElement
  let debugEl: DebugElement

  beforeEach(() => {
    mockAuthService = {
      isLoggedIn: true, checkLoggedInStatus: () => {
        return
      }
    } as AuthService
    mockContactService = {
      contactLists: {
        subscribe: () => {
          return
        }
      } as Observable<ContactList[]>
    } as ContactService

    TestBed.configureTestingModule({
      declarations: [
        SidenavComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: ContactService, useValue: mockContactService }
      ],
      // Use a different schema to avoid errors in CLI when writing shallow tests.
      // This way we don't need to write DEEP complex tests,
      // or implement a mock version of every component selector used in the template.
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    fixture = TestBed.createComponent(SidenavComponent)
    component = fixture.componentInstance
    debugEl = fixture.debugElement
    element = fixture.nativeElement
  })

  describe('initial display', () => {
    it('Should have the correct title in toolbar', () => {
      const toolbar = debugEl.query(By.css('mat-toolbar'))
      expect(toolbar).toBeTruthy()
      expect(element.querySelector('mat-toolbar')?.textContent).toContain('Contact Lists')
      expect(debugEl.query(By.css('mat-toolbar')).nativeElement.textContent).toContain('Contact Lists')
    })

    it('Should render no list elements when list empty', () => {
      component.contactLists = []
      fixture.detectChanges()
      const list = debugEl.query(By.css('mat-nav-list'))
      expect(list).toBeTruthy()
      expect(element.querySelector('mat-nav-list')?.childElementCount).toBe(component.contactLists.length + 1)
    })

    it('Should render correct number of elements', () => {
      component.contactLists = [...CONTACT_LISTS]
      fixture.detectChanges()
      const list = debugEl.query(By.css('mat-nav-list'))
      expect(list).toBeTruthy()
      expect(element.querySelector('mat-nav-list')?.childElementCount).toBe(CONTACT_LISTS.length + 1)
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
    name: 'list3'
  },
  {
    id: 3,
    userId: 1,
    name: 'list2'
  },
]

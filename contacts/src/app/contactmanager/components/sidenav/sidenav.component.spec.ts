import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { RouterTestingModule } from "@angular/router/testing"
import { ContactList } from "../../models/ContactList"
import { AuthService } from "../../services/auth.service"
import { ContactService } from "../../services/contact.service"
import { SidenavComponent } from "./sidenav.component"

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
    mockContactService = {} as ContactService

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
      expect(element.querySelector('mat-toolbar')?.textContent).toContain('Contact Lists');
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

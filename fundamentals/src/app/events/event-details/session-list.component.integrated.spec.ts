import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { AuthService } from 'src/app/user/auth.service'
import { VoterService } from '.'
import { DurationPipe } from '../shared'
import { SessionListComponent } from './session-list.component'

describe('SessionListComponent', () => {

  let mockAuthService: { isAuthenticated: () => boolean; currentUser: { userName: string } }
  let mockVoterService: { userHasVoted: () => boolean }
  let fixture: ComponentFixture<SessionListComponent>
  let component: SessionListComponent
  let element: HTMLElement
  let debugEl: DebugElement

  beforeEach(() => {
    mockAuthService = { isAuthenticated: () => true, currentUser: { userName: 'Joe' } }
    mockVoterService = { userHasVoted: () => true }
    TestBed.configureTestingModule({
      declarations: [
        SessionListComponent,
        DurationPipe
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    fixture = TestBed.createComponent(SessionListComponent)
    component = fixture.componentInstance
    debugEl = fixture.debugElement
    element = fixture.nativeElement
  })

  describe('initial display', () => {

    it('should have the correct name', () => {
      component.sessions = [
        {
          name: 'Session 1',
          id: 3,
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob']
        }
      ]
      component.filterBy = 'all'
      component.sortBy = 'name'
      component.eventId = 4
      component.ngOnChanges()
      fixture.detectChanges()

      expect(element.querySelector('[well-title]').textContent).toContain('Session 1')
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1')
    })
  })
})

import { TestBed } from '@angular/core/testing'
import { ActivatedRouteSnapshot, Router } from '@angular/router'
import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'
import { RouterStateSnapshot } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

describe('AuthGuard', () => {
  let guard: AuthGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    })
    guard = TestBed.inject(AuthGuard)
  })

  it('Should be created.', () => {
    expect(guard).toBeTruthy()
  })
})

describe('AuthGuard (isolated)', () => {
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate'])
    serviceStub = {}
    guard = new AuthGuard(serviceStub as AuthService, routerSpy)
  })

  const dummyRoute = {} as ActivatedRouteSnapshot
  const protectedUrls = ['/', '/contacts', '/contacts/1']
  const allowedUrls = ['/contacts/login']
  let guard: AuthGuard
  let routerSpy: jasmine.SpyObj<Router>
  let serviceStub: Partial<AuthService>

  describe('When the user is logged in:', () => {
    beforeEach(() => {
      serviceStub.isLoggedIn = true
    })

    it('Access is granted.', () => {
      const isAccessGranted = guard.canActivate()
      expect(isAccessGranted).toBeTrue()
    })
  })

  describe('When the user is logged out:', () => {
    beforeEach(() => {
      serviceStub.isLoggedIn = false
    })

    it('Access is denied.', () => {
      const isAccessGranted = guard.canActivate()
      expect(isAccessGranted).toBeFalsy()
    })
  })
})


function fakeRouterState(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot
}

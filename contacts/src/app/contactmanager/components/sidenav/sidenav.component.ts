import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs';
import { ContactList } from '../../models/ContactList';

const SMALL_WIDTH_BREAKPOINT = 720

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<boolean>()

  public isScreenSmall!: boolean;

  contactLists!: Observable<ContactList[]>

  constructor(
    private breakpointObserver: BreakpointObserver,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
    // .observe([ Breakpoints.XSmall ])
    .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches
    })

    this.contactLists = this.contactService.contactLists
    // this.contactLists.subscribe(data => {
    //   console.log(data)
    // })

    let data: any = null
    if(data = window.sessionStorage.getItem('auth-user')) {
      data = JSON.parse(data)
      this.contactService.loadContactLists(data.id, data.token)
    }
  }

  sendLoginEvent() :void {
    console.log('event sent 1')
    this.loginEvent.emit(true)
  }

  receiveLoginEvent($event: any) {
    console.log('event received 0')
    this.sendLoginEvent()
  }
}

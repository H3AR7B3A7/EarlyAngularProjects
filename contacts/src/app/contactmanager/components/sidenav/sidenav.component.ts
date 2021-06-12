import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'

const SMALL_WIDTH_BREAKPOINT = 720

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<boolean>()

  public isScreenSmall!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
    // .observe([ Breakpoints.XSmall ])
    .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches
    })
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

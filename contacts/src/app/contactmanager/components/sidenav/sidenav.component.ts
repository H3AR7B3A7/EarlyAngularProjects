import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs';
import { ContactList } from '../../models/ContactList';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

const SMALL_WIDTH_BREAKPOINT = 720

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<boolean>()

  public isScreenSmall!: boolean;

  contactLists$!: Observable<ContactList[]>

  closeModal: string | undefined
  isDarkTheme!: boolean

  form: any = {}

  constructor(
    private breakpointObserver: BreakpointObserver,
    private contactService: ContactService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      // .observe([ Breakpoints.XSmall ])
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches
      })

    this.contactLists$ = this.contactService.contactLists
    // this.contactLists.subscribe(data => {
    //   console.log(data)
    // })

    let data: any = null
    if (data = window.sessionStorage.getItem('auth-object')) {
      data = JSON.parse(data)
      this.contactService.loadContactLists(data.id)
    }
  }

  createNewListModal(content: any) {
    this.isDarkTheme = localStorage.getItem('theme') == 'dark' ? true : false
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addNewList() {
    let userId = JSON.parse(sessionStorage.getItem('auth-object')!).id
    this.contactService.addContactList(this.form.name, userId)
    // this.modalService.dismissAll()
    window.location.reload() // TODO: Find cleaner way
  }
}

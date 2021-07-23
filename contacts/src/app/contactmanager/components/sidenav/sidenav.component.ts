import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { ContactService } from '../../services/contact.service'
import { ContactList } from '../../models/ContactList'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router'
import { MatSidenav } from '@angular/material/sidenav'
import { FormControl, Validators } from '@angular/forms'

const SMALL_WIDTH_BREAKPOINT = 720

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav
  @Output() loginEvent = new EventEmitter<boolean>()

  public isScreenSmall!: boolean;

  contactLists: ContactList[] = []

  closeModal: string | undefined
  isDarkTheme!: boolean

  form: any = {}

  constructor(
    private breakpointObserver: BreakpointObserver,
    private contactService: ContactService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      // .observe([ Breakpoints.XSmall ])
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches
      })

    this.contactService.contactLists.subscribe(data => {
      this.contactLists = data
    })

    let data: any = null
    if (data = window.sessionStorage.getItem('auth-object')) {
      data = JSON.parse(data)
      this.contactService.loadContactLists(data.id)
    }

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close()
      }
    })
  }

  createNewListModal(content: any) {
    this.isDarkTheme = localStorage.getItem('theme') == 'dark' ? true : false
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC'
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop'
    } else {
      return `with: ${reason}`
    }
  }

  async addNewList() {
    this.form.userId = JSON.parse(sessionStorage.getItem('auth-object')!).id
    this.contactService.addContactList(this.form)
    this.router.navigate(['/contacts/'])
    // TODO: Find way to navigate to new id
  }

  name = new FormControl('', [Validators.required])

  getNameErrorMessage() {
    return 'You must enter a value'
  }
}

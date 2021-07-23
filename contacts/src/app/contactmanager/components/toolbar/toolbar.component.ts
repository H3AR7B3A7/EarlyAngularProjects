import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { ActivationEnd, Router } from '@angular/router'
import { ContactService } from '../../services/contact.service'
import { filter, map } from 'rxjs/operators'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>()

  closeModal: string | undefined
  isDarkTheme!: boolean

  currentListId: number = 0

  form: any = {}

  constructor(
    private contactService: ContactService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(e => (e instanceof ActivationEnd) && (Object.keys(e.snapshot.params).length > 0)),
        map(e => e instanceof ActivationEnd ? e.snapshot.params : {})
      )
      .subscribe(params => {
        this.currentListId = params['id']
      })
  }

  openDeleteListModal(content: any): void {
    this.isDarkTheme = localStorage.getItem('theme') == 'dark' ? true : false
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`
    })
  }

  deleteList(): void {
    this.contactService.deleteContactList(this.currentListId)
    this.router.navigate(['/contacts'])
  }

  createNewContactModal(content: any) {
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

  addContact(): void {
    this.form.contactListId = this.currentListId
    this.contactService.addContact(this.form)
  }

  name = new FormControl('', [Validators.required])

  getNameErrorMessage() {
    return 'You must enter a value'
  }

  email = new FormControl('', [Validators.required, Validators.email])

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value'
    }

    return this.email.hasError('email') ? 'Not a valid email' : ''
  }

  number = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')])

  getNumberErrorMessage() {
    if (this.number.hasError('required')) {
      return 'You must enter a value'
    }

    return this.number.hasError('pattern') ? 'Not a valid number' : ''
  }
}

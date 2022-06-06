import { Component, OnInit } from '@angular/core'
import { UserSettings } from '../data/user-settings'
import { DatePipe } from '@angular/common'
import { NgForm, NgModel } from '@angular/forms'
import { DataService } from '../data/data.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  postError: boolean = false
  postErrorMessage: string = ''
  subscriptionTypes!: Observable<string[]>

  singleModel = false
  birthday?: Date

  originalUserSettings: UserSettings = {
    name: '',
    surname: '',
    emailOffers: true,
    interfaceStyle: 'dark',
    interfaceStyle2: 'dark',
    subscriptionType: 'Annual',
    notes: 'Some notes ...',
    password: 'TopSecret',
    date: this.datePipe.transform(new Date, "yyyy-MM-dd")!
  }

  userSettings: UserSettings = { ...this.originalUserSettings }

  constructor(
    private datePipe: DatePipe,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes()
  }

  onSubmit(form: NgForm): void {
    console.log('In onSubmit(): ', form.valid)

    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('Success: ' + JSON.stringify(result)),
        error => this.onHttpError(error)
      )
    } else {
      this.postError = true
      this.postErrorMessage = 'Please fix the errors above'
    }
  }

  onHttpError(errorResponse: any) {
    console.log('Error: ', errorResponse)
    this.postError = true
    this.postErrorMessage = errorResponse.error.errorMessage
  }

  onBlur(field: NgModel) {
    console.log('In onBlur(): ', field.valid)
  }
}

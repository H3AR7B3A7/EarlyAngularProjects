import { Component, OnInit } from '@angular/core'
import { UserSettings } from '../data/user-settings'
import { DatePipe } from '@angular/common'
import { NgForm, NgModel } from '@angular/forms'

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: '',
    surname: '',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'Some notes ...',
    password: 'TopSecret',
    date: this.datePipe.transform(new Date, "yyyy-MM-dd")!
  }

  userSettings: UserSettings = { ...this.originalUserSettings }

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('In onSubmit(): ', form.valid)
  }

  onBlur(field: NgModel) {
    console.log('In onBlur(): ', field.valid)
  }
}

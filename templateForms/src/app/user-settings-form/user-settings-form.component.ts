import { Component, OnInit } from '@angular/core'
import { UserSettings } from '../data/user-settings'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: UserSettings = {
    name: 'Steven',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'Some notes ...',
    password: 'TopSecret',
    date: this.datePipe.transform(new Date, "yyyy-MM-dd")!
  }

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

}

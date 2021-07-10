import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'modelForms';

  private firstName!: FormControl
  private lastName!: FormControl

  profileForm!: FormGroup

  ngOnInit(): void {
    this.firstName = new FormControl("John", Validators.required)
    this.lastName = new FormControl("Doe", Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel() {
    console.log('cancelled')
  }

  saveProfile(value: any) {
    if (this.profileForm.valid) {
      console.log('saved: ' + value.firstName + ' ' + value.lastName)
    } else {
      console.log('not valid')
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }
}

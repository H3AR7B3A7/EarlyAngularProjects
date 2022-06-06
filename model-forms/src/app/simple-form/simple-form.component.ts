import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  title = 'Simple Form'

  private firstName!: FormControl
  private lastName!: FormControl

  profileForm!: FormGroup

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.firstName = new FormControl("John", [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl("Doe", Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel() {
    this.router.navigate(['/advanced'])
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

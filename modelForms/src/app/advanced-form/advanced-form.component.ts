import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.scss']
})
export class AdvancedFormComponent implements OnInit {
  title = 'Advanced Form'

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

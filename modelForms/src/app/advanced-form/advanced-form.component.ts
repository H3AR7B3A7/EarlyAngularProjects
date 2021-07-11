import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Address {
  street: string,
  number: number,
  city: string,
  country: string
}

interface Profile {
  firstName: string,
  lastName: string,
  address: Address,
  about?: string,
  img?: string
}

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.scss']
})
export class AdvancedFormComponent implements OnInit {
  title = 'Advanced Form'
  mouseOverSave = false

  firstName!: FormControl
  lastName!: FormControl
  street!: FormControl
  number!: FormControl
  city!: FormControl
  country!: FormControl
  about?: FormControl
  img?: FormControl

  profileForm!: FormGroup
  address!: FormGroup

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // THE LONG WAY
    this.firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl('', Validators.required)
    this.street = new FormControl('', Validators.required)
    this.number = new FormControl('', Validators.required)
    this.city = new FormControl('', Validators.required)
    this.country = new FormControl('', Validators.required)
    this.about = new FormControl('', Validators.maxLength(200))
    this.img = new FormControl('', Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'))
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      address: new FormGroup({
        street: this.street,
        number: this.number,
        city: this.city,
        country: this.country
      }),
      about: this.about,
      img: this.img
    })

    // this.profileForm = this._fb.group({
    //   firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z].*')]],
    //   lastName: ['', Validators.required],
    //   address: this._fb.group({
    //     street: ['', Validators.required],
    //     number: ['', Validators.required],
    //     city: ['', Validators.required],
    //     country: ['', Validators.required]
    //   }),
    //   about: ['', Validators.required],
    //   img: ['', Validators.required]
    // })
  }

  cancel() {
    console.log('Cancelled')
  }

  saveProfile(formValues: any) {
    console.log('saved: ' + JSON.stringify(this.profileForm.value))

    let profile: Profile = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: {
        street: formValues.address.street,
        number: +formValues.address.number,
        city: formValues.address.city,
        country: formValues.address.country
      },
      about: formValues.about,
      img: formValues.img
    }
    console.log('object: ' + JSON.stringify(profile))
  }
}

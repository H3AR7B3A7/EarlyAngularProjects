import { Directive } from '@angular/core';
import { FormGroup, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validate-about-or-image]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AboutOrImageValidator, multi: true }]
})
export class AboutOrImageValidator implements Validator {

  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors | null {
    let aboutControl = formGroup.controls['about']
    let imgControl = (<FormGroup>formGroup.root).controls['img']

    if ((aboutControl && aboutControl.value) || (imgControl && imgControl.value)) {
      return null;
    }

    return { validateAboutOrImage: false }
  }

}

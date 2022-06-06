import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomValidators } from './custom-validators';
import { PasswordForm } from './password-form.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  form!: FormGroup<PasswordForm>;

  constructor(private fb: NonNullableFormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(100),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(100),
          ],
        ],
      },
      {
        validators: CustomValidators.passwordsMatching,
        updateOn: 'blur', // 'change' | 'blur' | 'submit'
      }
    );
  }

  checkErrors(control: string) {
    const errors = (this.form.controls as any)[control].errors;
    return this.getErrorMessage(errors);
  }

  private getErrorMessage(errors: ValidationErrors) {
    if (errors['required']) {
      return 'Password is required!';
    } else if (errors['minlength']) {
      return 'Password should be longer than 8 characters!';
    } else if (errors['maxlength']) {
      return "Password can't be longer than 100 characters!";
    } else {
      return;
    }
  }
}

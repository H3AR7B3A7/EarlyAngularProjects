import { FormControl } from '@angular/forms';

export interface PasswordForm {
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

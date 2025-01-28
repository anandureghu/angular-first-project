import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { AuthWrapperComponent } from '../auth-wrapper/auth-wrapper.component';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { errorMessages } from './consts';
import { CommonModule } from '@angular/common';
import { group } from '@angular/animations';
import { Student } from '../../../types/student.type';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-signup',
  imports: [
    ButtonComponent,
    AuthWrapperComponent,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,

    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,

    CommonModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  isLinear = false;

  basicDetails = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      age: new FormControl('', [
        Validators.required,
        Validators.min(6),
        Validators.max(20),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      username: new FormControl('', Validators.required),
      class: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(12),
      ]),
      maths: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      english: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      science: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.matchPasswords(),
      ]),
    },
    { validators: this.matchPasswords }
  );

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.basicDetails.valid) {
      const student: Student = {
        id: uuidv4(),
        name: this.basicDetails.value.name!,
        email: this.basicDetails.value.email!,
        username: this.basicDetails.value.username!,
        class: +this.basicDetails.value.class!,
        age: +this.basicDetails.value.age!,
        marks: {
          math: +this.basicDetails.value.maths!,
          english: +this.basicDetails.value.english!,
          science: +this.basicDetails.value.science!,
        },
        password: this.basicDetails.value.password!,
        totalMarks:
          +this.basicDetails.value.maths! +
          +this.basicDetails.value.english! +
          +this.basicDetails.value.science!,
      };

      this.authService.register(student);
    }
  }

  getTotalMarks() {
    return (
      +this.basicDetails.value.maths! +
      +this.basicDetails.value.english! +
      +this.basicDetails.value.science!
    );
  }

  matchPasswords(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // const forbidden = nameRe.test(control.value);
      // return forbidden ? {forbiddenName: {value: control.value}} : null;
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { mismatch: true };
    };
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.basicDetails.get(controlName);

    if (control && control.touched && control.errors) {
      const errors = control.errors;

      // Loop through errors and find the first message in the `errorMessages` object
      for (const errorKey in errors) {
        if (errorMessages[controlName][errorKey]) {
          return errorMessages[controlName][errorKey];
        }
      }
    }
    return null; // No error to show
  }

  getErrorKeys() {
    return Object.keys(this.basicDetails.controls);
  }
}

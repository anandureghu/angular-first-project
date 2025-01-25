import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { AuthWrapperComponent } from '../auth-wrapper/auth-wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  isLinear = false;
}

import { Component } from '@angular/core';
import { AuthWrapperComponent } from '../auth-wrapper/auth-wrapper.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
@Component({
  selector: 'app-login',
  imports: [
    AuthWrapperComponent,
    ButtonComponent,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginDetails = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),

    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.loginDetails.valid) {
      this.authService.login(
        this.loginDetails.value.email!,
        this.loginDetails.value.password!
      );
    }
  }
}

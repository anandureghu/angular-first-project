import { Component } from '@angular/core';
import { AuthWrapperComponent } from '../auth-wrapper/auth-wrapper.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [
    AuthWrapperComponent,
    ButtonComponent,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}

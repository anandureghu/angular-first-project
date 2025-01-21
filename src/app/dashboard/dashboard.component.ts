import { Component } from '@angular/core';
import { studentsList } from '../../data';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  students = studentsList;
}

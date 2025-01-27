import { Component, inject } from '@angular/core';
import { studentsList } from '../../data';
import { ButtonComponent } from '../shared/button/button.component';
import { GradeTransformationPipe } from '../pipes/grade.pipe';
import { MarkStatusTransformationPipe } from '../pipes/mark.pipe';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherPlus } from '@ng-icons/feather-icons';
import { RouterLink } from '@angular/router';
import { StudentsService } from '../../service/students.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    ButtonComponent,
    GradeTransformationPipe,
    MarkStatusTransformationPipe,
    NgIcon,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  viewProviders: [provideIcons({ featherPlus })],
})
export class DashboardComponent {
  students = studentsList;

  constructor(private studentsService: StudentsService) {
    this.students = this.studentsService.getAll();
  }
}

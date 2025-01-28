import { Component, inject } from '@angular/core';
import { studentsList } from '../../data';
import { ButtonComponent } from '../shared/button/button.component';
import { GradeTransformationPipe } from '../pipes/grade.pipe';
import { MarkStatusTransformationPipe } from '../pipes/mark.pipe';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherPlus } from '@ng-icons/feather-icons';
import { RouterLink } from '@angular/router';
import { StudentsService } from '../../service/students.service';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    ButtonComponent,
    GradeTransformationPipe,
    MarkStatusTransformationPipe,
    NgIcon,
    RouterLink,
    DialogComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  viewProviders: [provideIcons({ featherPlus })],
})
export class DashboardComponent {
  students = studentsList;
  openDeleteDialog = false;
  currentStudent: null | { name: string; id: string } = null;

  constructor(private studentsService: StudentsService) {
    this.students = this.studentsService.getAll();
  }

  handleDeleteClickOpen(name: string, id: string) {
    console.log('first');
    this.openDeleteDialog = true;
    this.currentStudent = { name, id };

    console.log(this.openDeleteDialog);
  }

  handleDeleteDialogClose() {
    this.openDeleteDialog = false;
    this.currentStudent = null;
  }

  deleteStudent(id: string) {
    this.studentsService.deleteById(id);
    this.students = this.studentsService.getAll();
  }
}

import { Component } from '@angular/core';
import { StudentFormComponent } from '../student-form/student-form.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { IStudentSubmit, Student } from '../../../types/student.type';
import { StudentsService } from '../../../service/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  imports: [StudentFormComponent, ButtonComponent],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss',
})
export class AddStudentComponent {
  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) {}

  onSubmit(data: IStudentSubmit) {
    console.log(data);
    if (data.valid) {
      this.studentsService.add(data.student);
      this.router.navigate(['/']);
    }
  }
}

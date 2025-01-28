import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../service/students.service';
import { IStudentSubmit, Student } from '../../../types/student.type';
import { StudentFormComponent } from '../student-form/student-form.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-edit-student',
  imports: [StudentFormComponent, ButtonComponent],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss',
})
export class EditStudentComponent implements OnInit {
  student: Student | null = null;

  constructor(
    private activeRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const studentId = this.activeRoute.snapshot.paramMap.get('studentId');
    if (!studentId) this.router.navigate(['/']);

    const student = this.studentsService.findById(studentId!);
    if (!student) this.router.navigate(['/']);
    else this.student = student;
  }

  onSubmit(data: IStudentSubmit) {
    if (data.valid) {
      this.studentsService.update(data.student);
      this.router.navigate(['/']);
    }
  }
}

import { Injectable } from '@angular/core';
import { STUDENTS_KEY, USER_KEY } from '../consts';
import { Student } from '../types/student.type';
import { StudentsService } from './students.service';
import { DbService } from './db.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _user: Student | null = null;

  constructor(
    private studentService: StudentsService,
    private dbService: DbService,
    private router: Router
  ) {}

  initAuth() {
    const value = this.dbService.get(USER_KEY);
    const students = this.studentService.getAll();
    const student = students.find((item) => item.email == value);
    this._user = student ? student : null;
  }

  login(
    email: string,
    password: string
  ): { success: boolean; message: string } {
    const students = this.studentService.getAll();
    const student = students.find((item) => item.email == email);
    if (student) {
      if (student.password === password) {
        this.dbService.set(USER_KEY, student.email);
        this._user = student;
        this.router.navigate(['/']);
        return { success: true, message: 'Login Success' };
      } else {
        return { success: false, message: 'Password not matching' };
      }
    }
    return { success: false, message: 'Student not found' };
  }

  logout() {
    this._user = null;
    this.dbService.set(USER_KEY, '');
    this.router.navigate(['/login']);
  }

  register(student: Student) {
    this.studentService.add(student); // adding to db
    this.dbService.set(USER_KEY, student.email);
    this._user = student;
    this.router.navigate(['/']);
  }
}

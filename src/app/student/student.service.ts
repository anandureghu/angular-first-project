import { Injectable } from '@angular/core';
import { studentsList } from '../../data';
import { Student } from '../../types/student.type';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[] = studentsList || [];
  constructor() {}

  getAllStudents() {
    return this.students;
  }

  addNewStudent(student: Student) {
    this.students.unshift(student); // add new student to the start of the array
  }

  deleteStudent(id: number) {
    this.students = this.students.filter((student) => student.id !== id);
  }
}

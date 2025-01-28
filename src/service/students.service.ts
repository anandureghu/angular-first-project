import { Injectable } from '@angular/core';
import { Student } from '../types/student.type';
import { DbService } from './db.service';
import { STUDENTS_KEY } from '../consts';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  _students: Student[] = [];

  constructor(private dbService: DbService) {}

  initStudents() {
    const value = this.dbService.get(STUDENTS_KEY);
    this._students = value ? JSON.parse(value) : [];
  }

  getAll(): Student[] {
    return this._students;
  }

  add(student: Student): Student[] {
    this._students.unshift(student);
    this.dbService.set(STUDENTS_KEY, this._students);
    return this._students;
  }

  findById(id: string): Student | null {
    const student = this._students.find((student) => student.id == id);
    return student || null;
  }

  findByEmail(email: string): Student | null {
    const student = this._students.find((student) => student.email == email);
    return student || null;
  }

  deleteById(id: string) {
    this._students = this._students.filter((student) => student.id !== id);
    this.dbService.set(STUDENTS_KEY, this._students);
  }

  update(id: string, value: Student) {
    this._students = this._students.map((student) => {
      if (student.id == id) {
        student = { ...value };
      }

      return student;
    });
  }
}

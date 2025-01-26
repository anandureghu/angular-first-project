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

  getById(id: string) {}

  deleteById(id: string) {}

  update(id: string) {}
}

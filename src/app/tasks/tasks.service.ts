import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from '../task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  private tasks = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      dueDate: taskData.date,
      title: taskData.title,
      summary: taskData.summary,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { AddTaskComponent } from '../add-task/add-task.component';
import { type NewTask } from '../task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddOpen: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onTaskAdd() {
    this.isAddOpen = !this.isAddOpen;
  }

  closeAddTask() {
    this.isAddOpen = false;
  }

  onAddTaskSubmit(taskData: NewTask) {
    this.tasksService.addTask(taskData, this.userId);
    this.closeAddTask();
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppService } from './app.service';
import { StudentsService } from '../service/students.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'student-management';

  constructor(
    private appService: AppService,
    private studentsService: StudentsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // fetch all data from db
    this.studentsService.initStudents(); // get students first, then only can collect authenticated user
    this.authService.initAuth(); // after collecting students, get authorization;
  }

  isAuthRoute() {
    const currentUrl = this.appService.getCurrentUrl();
    return currentUrl == '/login' || currentUrl == '/signup';
  }
}

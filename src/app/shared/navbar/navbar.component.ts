import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AppService } from '../../app.service';
import { AuthService } from '../../../service/auth.service';
import { Student } from '../../../types/student.type';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  user: Student | null = null;

  constructor(
    private router: Router,
    private appService: AppService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.appService.setCurrentUrl(event.urlAfterRedirects);
      }
    });
    this.user = this.authService._user;
  }
}

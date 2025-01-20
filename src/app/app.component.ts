import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'student-management';

  constructor(private appService: AppService) {}

  isAuthRoute() {
    const currentUrl = this.appService.getCurrentUrl();
    return currentUrl == '/login' || currentUrl == '/signup';
  }
}

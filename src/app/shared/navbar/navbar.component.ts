import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.appService.setCurrentUrl(event.urlAfterRedirects);
      }
    });
  }
}

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { StatusComponent } from './dashboard/status/status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    StatusComponent,
    TrafficComponent,
    DashboardItemComponent,
    TicketsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css',
})
export class AppComponent {}

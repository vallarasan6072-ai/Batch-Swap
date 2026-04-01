import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from '../requests/requests';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RequestsComponent],  // ✅ works because requests.ts is now standalone
  templateUrl: './dashboard.html'
})
export class DashboardComponent {}
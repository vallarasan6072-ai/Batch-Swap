import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService, SwapRequest } from '../service/request.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  requests: SwapRequest[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.getRequests().subscribe((data) => {
      this.requests = data;
    });
  }
}
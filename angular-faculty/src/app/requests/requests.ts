import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService, SwapRequest } from '../service/request.service';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './requests.html',
  styleUrls: ['./requests.css']
})
export class RequestsComponent implements OnInit {

  requests: SwapRequest[] = [];
  processingId: string | null = null;

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.getRequests().subscribe((data) => {
      this.requests = data;
    });
  }

  get pendingRequests(): SwapRequest[] {
    return this.requests.filter(r => r.status === 'pending');
  }

  get resolvedRequests(): SwapRequest[] {
    return this.requests.filter(r => r.status !== 'pending');
  }

  onAccept(id: string): void {
    this.processingId = id;
    this.requestService.approveRequest(id).subscribe(() => {
      this.processingId = null;
      this.loadRequests();
    });
  }

  onReject(id: string): void {
    this.processingId = id;
    this.requestService.rejectRequest(id).subscribe(() => {
      this.processingId = null;
      this.loadRequests();
    });
  }
}
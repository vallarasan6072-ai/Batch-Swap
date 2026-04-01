import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SwapRequest {
  _id: string;
  student: string;
  currentClass: string;
  requestedClass: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private API_URL = ' https://batch-swap.onrender.com/api';

  constructor(private http: HttpClient) {}

  //  GET ALL REQUESTS
  getRequests(): Observable<SwapRequest[]> {
    return this.http.get<SwapRequest[]>(this.API_URL);
  }

  //  APPROVE
  approveRequest(id: string) {
    return this.http.put(`${this.API_URL}/approve/${id}`, {});
  }

  //  REJECT
  rejectRequest(id: string) {
    return this.http.put(`${this.API_URL}/reject/${id}`, {});
  }
}
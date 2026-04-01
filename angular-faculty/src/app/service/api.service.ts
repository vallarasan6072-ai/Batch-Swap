import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base = "https://batch-swap.onrender.com/api";

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.base}/auth/login`, data);
  }

  getRequests() {
    return this.http.get(`${this.base}/swap`);
  }

  approve(id: string) {
    return this.http.put(`${this.base}/swap/approve/${id}`, {});
  }

  reject(id: string) {
    return this.http.put(`${this.base}/swap/reject/${id}`, {});
  }
}
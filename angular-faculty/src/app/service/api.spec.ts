import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Request {
  _id?: string;
  title: string;
  description: string;
  status?: string;
  createdAt?: string;
}

@Injectable({ providedIn: 'root' })
export class RequestService {
  private apiUrl = 'http://localhost:3000/api/requests';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Request[]> {
    return this.http.get<Request[]>(this.apiUrl);
  }

  create(data: Request): Observable<Request> {
    return this.http.post<Request>(this.apiUrl, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  private baseUrl = 'http://localhost:9000/auth/';
  
  checkuser(): Observable<any> {
    const token = localStorage.getItem('token'); // Get token from local storagee token in the request header
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // Send GET request to your server to check user's authentication status
    return this.http.get<any>(`${this.baseUrl}userdataget`, { headers });
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}signup`, userData);
  }

  login(email: any, password: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}signin`, {email: email, password: password});
  }

}

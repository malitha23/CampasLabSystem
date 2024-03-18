import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  private baseUrl = 'http://localhost:9000/';
  
  checkuser(): Observable<any> {
    const token = localStorage.getItem('token'); // Get token from local storagee token in the request header
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // Send GET request to your server to check user's authentication status
    return this.http.get<any>(`${this.baseUrl}auth/userdataget`, { headers });
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}auth/signup`, userData);
  }

  login(email: any, password: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}auth/signin`, {email: email, password: password});
  }

  appointment(data: any): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // Send GET request to your server to check user's authentication status
    return this.http.post<any>(`${this.baseUrl}appointment/schedule`,data, { headers });
  }

}

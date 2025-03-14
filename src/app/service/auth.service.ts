import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  private apiUrl = 'http://localhost:3010/api/users'; // Replace with your backend URL

  constructor(private http: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject.next(JSON.parse(user));
    }
  }

  register(user: RegisterModel): Observable<any> {
    console.log(user)
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: LoginModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  setUser(userData: any) {
    this.userSubject.next(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }

  getUser() {
    return this.userSubject.value;
  }
 
}
export class RegisterModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class loginService {
  loginAPI: string;

  constructor(private http: HttpClient) {
    this.loginAPI = environment.baseUrlApiLogin;
  }

  postLogin(data: login): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.loginAPI + 'login', data, { headers });
  }

}

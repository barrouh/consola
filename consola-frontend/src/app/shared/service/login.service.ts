import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../model/login-dto';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = 'http://localhost:8080/';
  public isAuthenticated=false;
  
  constructor(private http: HttpClient) {}

  login(loginDTO: LoginDTO): any {
    return this.http.post(this.url + 'api/employees/login', loginDTO);
  }
}

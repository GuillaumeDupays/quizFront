import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  urlDev = 'http://localhost:3000';
  users: {} = [
    {
      username: '',
      icon: '',
    },
  ];

  constructor(private http: HttpClient) {}
  saveNewUser(user: User) {
    // this.users = user;
    // console.log('this.users :>> ', this.users);
    return this.http.post<User>(`${this.urlDev}/api/users`, user);
  }
  login(email: string, password: string) {
    return this.http.post<User>(`${this.urlDev}/api/users`, {
      email,
      password,
    });
    // this is just the HTTP call,
    // we still need to handle the reception of the token
  }
}

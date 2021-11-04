import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  users: {} = [
    {
      username: '',
      icon: '',
    },
  ];

  constructor() {}
  saveNewUser(newUserName: string, newIcon: string) {
    this.users = { username: newUserName, icon: newIcon };
  }
}

import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }
  get username(): string | undefined{
    return this.user?.username;
  }

  constructor() {
    try {
      let lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (err) {
      this.user = undefined;
    }
  }

  logIn() {
     this.user = {
      email: 'petar@abv.bg',
      username: 'pesho',
      phone: '0897875223',
      password: '123456',
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logOut() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }


}

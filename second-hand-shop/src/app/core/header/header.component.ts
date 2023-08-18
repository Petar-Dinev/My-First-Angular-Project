import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  
  get isloggedIn(): boolean {
    return this.userService.isLogged;
  }
  get username(): string | undefined{
    return this.userService.username;
  }

  constructor(private userService: UserService, private router: Router) {}


  logout() {
    this.userService.logOut();
    this.router.navigate(['/'])
  }
}

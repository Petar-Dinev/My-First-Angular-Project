import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;

    this.userService.logIn(email, password).subscribe({
      next: () => this.router.navigate(['/cars'])
    });
  }
}

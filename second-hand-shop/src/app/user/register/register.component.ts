import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  passwordsMissMatch: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (form.value.password !== form.value.rePass) {
      this.passwordsMissMatch = true;
      return;
    } else {
      this.passwordsMissMatch = false;
    }

    const { email, username, phone, password } = form.value;
    this.userService.register(email, username, phone, password).subscribe({
      next: () => this.router.navigate(['/cars']),
    });
  }
}

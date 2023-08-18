import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) {
    
  }


  onSubmitHandler(form: NgForm) {
    if(form.invalid) {
      return;
    }
    const value: {username: String; email: String} = form.value;
    
    form.setValue({username: '', password: ''})
  }

  login() {
    this.userService.logIn()
    this.router.navigate(['/cars'])
  }

  
}

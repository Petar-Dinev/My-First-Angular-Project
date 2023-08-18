import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

 constructor(private userService: UserService, private router: Router) {}

  onSubmitHandler(form: NgForm) {
    if(form.invalid) {
      return;
    }
    
    const value: {email:string; username:string; phone:string; password:string; rePass: string} = form.value;
  }

  register() {
    this.userService.logIn()
    this.router.navigate(['/cars'])
  }
}

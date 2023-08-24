import { Component, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent {
  constructor(
    private userService: UserService,
    private apiService: ApiService,
    private router: Router
  ) {}

  addCar(form: NgForm) {
    if (form.invalid) {
      return;
    }
    
    const ownerId = this.userService.userId;
    const { brand, model, year, price, location, imageUrl, description } = form.value;
    this.apiService
      .createCar(brand, model, year, price, location, imageUrl, description, ownerId!)
      .subscribe({
        next: () => this.router.navigate(['/cars']),
      });
  }
}

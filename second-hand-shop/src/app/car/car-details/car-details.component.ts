import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Car } from 'src/app/types/car';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  car: Car | undefined;


  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCarInfo();
  }

  getCarInfo() {
    const id: string = this.activeRoute.snapshot.params['id'];
    this.apiService.getCar(id).subscribe({
      next: (car) => {
        this.car = car;
      },
      error: (err) => console.log(err),
    });
  }

  get isOwner(): boolean {
    return this.car?._ownerId === this.userService.userId;
  }

  onDelete() {
    const choise = window.confirm('Are u sure u want delete this offer?')
    if(choise) {
      this.apiService.delCar(this.car?._id!).subscribe({
        next: () => this.router.navigate(['/cars'])
      })
    }
  }
}

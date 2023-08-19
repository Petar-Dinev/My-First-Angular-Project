import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Car } from './types/car';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCars() {
    const { apiUrl } = environment;
    return this.http.get<Car[]>(`/api/data/cars`);
  }
  getCar(id: string) {
    const { apiUrl } = environment;
     return this.http.get<Car>(`/api/data/cars/${id}`);
  }
  createCar(brand:string, model:string,year:number,price:number,location:string,description:string) {
     return this.http.post<Car>('/api/data/cars', {brand, model, year, price, location, description});
  }
  updateCar(id: string, carInfo: Car) {
    const { apiUrl } = environment;
     return this.http.put<Car>(`${apiUrl}/cars/${id}`, {...carInfo});
  }
  delCar(id: string) {
    const { apiUrl } = environment;
     return this.http.delete<Car>(`${apiUrl}/cars/${id}`);
  }

  getComments() {
    const { apiUrl } = environment;
    const url = `${apiUrl}/comments`;
    return this.http.get<Comment[]>(url)
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarsListComponent } from './cars-list/cars-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, CarsListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

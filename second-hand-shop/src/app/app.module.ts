import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarModule } from './car/car.module';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, CoreModule, UserModule, CarModule, AppRoutingModule,],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

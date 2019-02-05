import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AuthorizationComponent } from './homepage/authorization/authorization.component';
import { RegistrationComponent } from './homepage/registration/registration.component';
import { CitiesComponent } from './adminpage/cities/cities.component';
import { CentersComponent } from './adminpage/centers/centers.component';
import { UsersComponent } from './adminpage/users/users.component';
import { ReservationsComponent } from './adminpage/reservations/reservations.component';
import { HeaderComponent } from './header/header.component';
import { AddcenterComponent } from './adminpage/centers/addcenter/addcenter.component';
import { AllcentersComponent } from './adminpage/centers/allcenters/allcenters.component';
import { AllcitiesComponent } from './adminpage/cities/allcities/allcities.component';
import { AddcityComponent } from './adminpage/cities/addcity/addcity.component';

import { Interceptor } from './services/interceptor';
import { CitiesService } from './services/cities.service';
import { AuthService } from './services/auth.service';
import { GatewayService } from './services/gateway.service';
import { CentersService } from './services/centers.service';
import { UsersService } from './services/users.service';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminpageComponent,
    AuthorizationComponent,
    RegistrationComponent,
    CitiesComponent,
    CentersComponent,
    UsersComponent,
    ReservationsComponent,
    HeaderComponent,
    AddcenterComponent,
    AllcentersComponent,
    AllcitiesComponent,
    AddcityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GatewayService,
    AuthService,
    CitiesService,
    CentersService,
    UsersService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

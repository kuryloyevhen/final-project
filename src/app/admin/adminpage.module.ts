import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminpageRoutingModule } from './adminpage-routing.module';

import { AdminpageComponent } from './adminpage/adminpage.component';
import { CitiesComponent } from './adminpage/cities/cities.component';
import { AllCitiesComponent } from './adminpage/cities/all-cities/all-cities.component';
import { AddCityComponent } from './adminpage/cities/add-city/add-city.component';
import { CentersComponent } from './adminpage/centers/centers.component';
import { AllCentersComponent } from './adminpage/centers/all-centers/all-centers.component';
import { AddCenterComponent } from './adminpage/centers/add-center/add-center.component';
import { UsersComponent } from './adminpage/users/users.component';
import { FindUserComponent } from './adminpage/users/find-user/find-user.component';
import { AllUsersComponent } from './adminpage/users/all-users/all-users.component';
import { ReservationsComponent } from './adminpage/reservations/reservations.component';
import { AllReservationsComponent } from './adminpage/reservations/all-reservations/all-reservations.component';
import { CitiesCentersComponent } from './adminpage/reservations/cities-centers/cities-centers.component';

import { CitiesService } from '../services/cities.service';
import { CentersService } from '../services/centers.service';
import { UsersService } from '../services/users.service';
import { ReservationsService } from '../services/reservations.service';

@NgModule({
  declarations: [
    AdminpageComponent,
    CitiesComponent,
    AllCitiesComponent,
    AddCityComponent,
    CentersComponent,
    AllCentersComponent,
    AddCenterComponent,
    UsersComponent,
    FindUserComponent,
    AllUsersComponent,
    ReservationsComponent,
    AllReservationsComponent,
    CitiesCentersComponent
  ],
  providers: [
    CitiesService,
    CentersService,
    UsersService,
    ReservationsService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminpageRoutingModule
  ]
})

export class AdminpageModule { }

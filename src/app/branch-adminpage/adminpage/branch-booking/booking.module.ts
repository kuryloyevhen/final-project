import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import {
            MatInputModule,
            MatDividerModule,
            MatListModule,
            MatButtonModule,
            MatBadgeModule
                                    } from '@angular/material';

import { BookingsComponent } from './bookings/bookings.component';
import { UserBookingsComponent } from './bookings/user-bookings/user-bookings.component';
import { CityBookingsComponent } from './bookings/city-bookings/city-bookings.component';

import { BookingsService } from '../../../services/bookings.service';
import { CentersService } from '../../../services/centers.service';
import { CenterBookingsComponent } from './bookings/center-bookings/center-bookings.component';

@NgModule({
  declarations: [
    BookingsComponent,
    UserBookingsComponent,
    CityBookingsComponent,
    CenterBookingsComponent
  ],
  providers: [
    BookingsService,
    CentersService
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule
  ]
})

export class BookingModule { }

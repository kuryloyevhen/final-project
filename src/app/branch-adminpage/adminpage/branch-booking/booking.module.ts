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
import { CommonBookingsComponent } from './bookings/common-bookings/common-bookings.component';

import { BookingsService } from '../../../services/bookings.service';

@NgModule({
  declarations: [
    BookingsComponent,
    UserBookingsComponent,
    CommonBookingsComponent
  ],
  providers: [ BookingsService ],
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

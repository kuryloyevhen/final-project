import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsComponent } from './bookings/bookings.component';
import { UserBookingsComponent } from './bookings/user-bookings/user-bookings.component';
import { CityBookingsComponent } from './bookings/city-bookings/city-bookings.component';
import { CenterBookingsComponent } from './bookings/center-bookings/center-bookings.component';

const routes: Routes = [
  { path: '', component: BookingsComponent, children: [
    { path: '', redirectTo: 'user-bookings', pathMatch: 'full' },
    { path: 'user-bookings', component: UserBookingsComponent },
    { path: 'city-bookings', component: CityBookingsComponent },
    { path: 'center-bookings', component: CenterBookingsComponent }
  ] }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ]
})

export class BookingRoutingModule { }

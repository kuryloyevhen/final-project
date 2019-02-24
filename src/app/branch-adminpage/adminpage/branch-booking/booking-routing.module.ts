import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsComponent } from './bookings/bookings.component';
import { UserBookingsComponent } from './bookings/user-bookings/user-bookings.component';
import { CommonBookingsComponent } from './bookings/common-bookings/common-bookings.component';

const routes: Routes = [
  { path: '', component: BookingsComponent, children: [
    { path: '', redirectTo: 'user-bookings', pathMatch: 'full' },
    { path: 'user-bookings', component: UserBookingsComponent },
    { path: 'common-bookings', component: CommonBookingsComponent }
  ] }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ]
})

export class BookingRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpageComponent } from './adminpage/adminpage.component';


const routes: Routes = [

  { path: '', component: AdminpageComponent, children: [
    { path: 'cities', loadChildren: './adminpage/branch-city/city.module#CityModule' },
    { path: 'centers', loadChildren: './adminpage/branch-center/center.module#CenterModule' },
    { path: 'users', loadChildren: './adminpage/branch-user/user.module#UserModule' },
    { path: 'bookings', loadChildren: './adminpage/branch-booking/booking.module#BookingModule'}
  ] }

]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ]
})

export class AdminpageRoutingModule { }

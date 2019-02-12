import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpageComponent } from './adminpage/adminpage.component';
import { CitiesComponent } from './adminpage/cities/cities.component';
import { AllCitiesComponent } from './adminpage/cities/all-cities/all-cities.component';
import { AddCityComponent } from './adminpage/cities/add-city/add-city.component';
import { CentersComponent } from './adminpage/centers/centers.component';
import { AllCentersComponent } from './adminpage/centers/all-centers/all-centers.component';
import { AddCenterComponent } from './adminpage/centers/add-center/add-center.component';
import { UsersComponent } from './adminpage/users/users.component';
import { AllUsersComponent } from './adminpage/users/all-users/all-users.component';
import { FindUserComponent } from './adminpage/users/find-user/find-user.component';
import { ReservationsComponent } from './adminpage/reservations/reservations.component';
import { UserReservationsComponent } from './adminpage/reservations/user-reservations/user-reservations.component';
import { CommonReservationsComponent } from './adminpage/reservations/common-reservations/common-reservations.component';

const routes: Routes = [

  { path: '', component: AdminpageComponent, children: [
    { path: 'cities', component: CitiesComponent, children: [
      { path: 'add-city', component: AddCityComponent },
      { path: 'all-cities', component: AllCitiesComponent }
    ] },
    { path: 'centers', component: CentersComponent, children: [
      { path: 'all-centers', component: AllCentersComponent },
      { path: 'add-center', component: AddCenterComponent }
    ] },
    { path: 'users', component: UsersComponent, children: [
      { path: 'all-users', component: AllUsersComponent },
      { path: 'find-user', component: FindUserComponent }
    ] },
    { path: 'reservations', component: ReservationsComponent, children: [
      { path: '', redirectTo: 'user-reservations', pathMatch: 'full' },
      { path: 'user-reservations', component: UserReservationsComponent },
      { path: 'common-reservations', component: CommonReservationsComponent }
    ] }
  ] }


]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ]
})
export class AdminpageRoutingModule { }

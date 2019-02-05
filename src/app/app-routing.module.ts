import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CitiesComponent } from './adminpage/cities/cities.component';
import { CentersComponent } from './adminpage/centers/centers.component';
import { UsersComponent } from './adminpage/users/users.component';
import { ReservationsComponent } from './adminpage/reservations/reservations.component';
import { AllcentersComponent } from './adminpage/centers/allcenters/allcenters.component';
import { AddcenterComponent } from './adminpage/centers/addcenter/addcenter.component';
import { AuthorizationComponent } from './homepage/authorization/authorization.component';
import { RegistrationComponent } from './homepage/registration/registration.component';
import { AllcitiesComponent } from './adminpage/cities/allcities/allcities.component';
import { AddcityComponent } from './adminpage/cities/addcity/addcity.component';



const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent, children: [
    { path: '', redirectTo: 'authorization', pathMatch: 'full' },
    { path: 'authorization', component: AuthorizationComponent },
    { path: 'registration', component: RegistrationComponent }
  ] },
  { path: 'adminpage', component: AdminpageComponent, children: [
    { path: 'cities', component: CitiesComponent, children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllcitiesComponent },
      { path: 'add', component: AddcityComponent }
    ] },
    { path: 'centers', component: CentersComponent, children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllcentersComponent },
      { path: 'add', component: AddcenterComponent }
    ] },
    { path: 'users', component: UsersComponent },
    { path: 'reservations', component: ReservationsComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

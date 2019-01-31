import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CitiesComponent } from './cities/cities.component';
import { CentersComponent } from './centers/centers.component';
import { UsersComponent } from './users/users.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'adminpage', component: AdminpageComponent, children: [
    { path: 'cities', component: CitiesComponent },
    { path: 'centers', component: CentersComponent },
    { path: 'users', component: UsersComponent },
    { path: 'reservations', component: ReservationsComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

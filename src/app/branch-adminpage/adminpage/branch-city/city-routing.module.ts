import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { AllCitiesComponent } from './cities/all-cities/all-cities.component';
import { AddCityComponent } from './cities/add-city/add-city.component';

const routes: Routes = [
  { path: '', component: CitiesComponent, children: [
    { path: 'all-cities', component: AllCitiesComponent },
    { path: 'add-city', component: AddCityComponent }
  ] }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ]
})

export class CityRoutingModule { }

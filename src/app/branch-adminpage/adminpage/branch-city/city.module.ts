import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CityRoutingModule } from './city-routing.module';

import { CitiesComponent } from './cities/cities.component';
import { AllCitiesComponent } from './cities/all-cities/all-cities.component';
import { AddCityComponent } from './cities/add-city/add-city.component';

import { CitiesService } from '../../../services/cities.service';

@NgModule({
  declarations: [
    CitiesComponent,
    AllCitiesComponent,
    AddCityComponent
  ],
  providers: [ CitiesService ],
  imports: [
    CommonModule,
    CityRoutingModule,
    ReactiveFormsModule
  ]
})

export class CityModule { }

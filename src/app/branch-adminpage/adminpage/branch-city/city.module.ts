import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
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
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule
  ]
})

export class CityModule { }

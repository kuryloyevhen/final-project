import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterRoutingModule } from './center-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CentersComponent } from './centers/centers.component';
import { AllCentersComponent } from './centers/all-centers/all-centers.component';
import { AddCenterComponent } from './centers/add-center/add-center.component';

import { CentersService } from '../../../services/centers.service';
import { CitiesService } from '../../../services/cities.service';


@NgModule({
  declarations: [
    CentersComponent,
    AllCentersComponent,
    AddCenterComponent
  ],
  providers: [
    CentersService,
    CitiesService
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    ReactiveFormsModule
  ]
})
export class CenterModule { }

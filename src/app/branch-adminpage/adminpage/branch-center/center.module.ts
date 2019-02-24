import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterRoutingModule } from './center-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { CentersComponent } from './centers/centers.component';
import { AllCentersComponent } from './centers/all-centers/all-centers.component';
import { AddCenterComponent } from './centers/add-center/add-center.component';
import { DialogComponent } from './centers/all-centers/dialog.component';

import { CentersService } from '../../../services/centers.service';
import { CitiesService } from '../../../services/cities.service';


@NgModule({
  declarations: [
    CentersComponent,
    AllCentersComponent,
    AddCenterComponent,
    DialogComponent
  ],
  providers: [
    CentersService,
    CitiesService
  ],
  imports: [
    CommonModule,
    CenterRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class CenterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminpageRoutingModule } from './adminpage-routing.module';

import { AdminpageComponent } from './adminpage/adminpage.component';




@NgModule({
  declarations: [
    AdminpageComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminpageRoutingModule
  ]
})

export class AdminpageModule { }

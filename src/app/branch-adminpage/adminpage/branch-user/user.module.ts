import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import {
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatDividerModule,
            MatListModule,
            MatButtonModule,
            MatBadgeModule
                                    } from '@angular/material';


import { UsersComponent } from './users/users.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { FindUserComponent } from './users/find-user/find-user.component';

import { UsersService } from '../../../services/users.service';

@NgModule({
  declarations: [
    UsersComponent,
    AllUsersComponent,
    FindUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [
    UsersService
  ]

})
export class UserModule { }

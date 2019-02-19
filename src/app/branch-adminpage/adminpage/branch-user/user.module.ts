import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import {MatInputModule} from '@angular/material/input';

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
  providers: [ UsersService ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule
  ]
})
export class UserModule { }

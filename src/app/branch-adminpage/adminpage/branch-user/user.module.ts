import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

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
    UserRoutingModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { FindUserComponent } from './users/find-user/find-user.component';


const routes: Routes = [
  { path: '', component: UsersComponent, children: [
    { path: '', redirectTo: 'all-users', pathMatch: 'full' },
    { path: 'all-users', component: AllUsersComponent },
    { path: 'find-user', component: FindUserComponent }
  ] }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ]
})

export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterGuard } from './services/router-guard';

import { HomepageComponent } from './homepage/homepage.component';
import { AuthorizationComponent } from './homepage/authorization/authorization.component';
import { RegistrationComponent } from './homepage/registration/registration.component';



const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent, children: [
    { path: '', redirectTo: 'authorization', pathMatch: 'full' },
    { path: 'authorization', component: AuthorizationComponent },
    { path: 'registration', component: RegistrationComponent }
  ] },
  { path: 'adminpage', loadChildren: './admin/adminpage.module#AdminpageModule', canActivate: [RouterGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

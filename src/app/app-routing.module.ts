import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterGuard } from './services/router-guard';

import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
  { path: '', redirectTo: 'authorization', pathMatch: 'full' },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'homepage', loadChildren: './branch-homepage/homepage.module#HomepageModule', canActivate: [RouterGuard] },
  { path: 'adminpage', loadChildren: './branch-adminpage/adminpage.module#AdminpageModule', canActivate: [RouterGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

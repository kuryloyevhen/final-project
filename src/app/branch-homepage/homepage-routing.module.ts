import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  { path: '', component: HomepageComponent }

]


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ]
})

export class HomepageRoutingModule { }

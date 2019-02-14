import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentersComponent } from './centers/centers.component';
import { AllCentersComponent } from './centers/all-centers/all-centers.component';
import { AddCenterComponent } from './centers/add-center/add-center.component';

const routes: Routes = [
  { path: '', component: CentersComponent, children: [
    { path: 'all-centers', component: AllCentersComponent },
    { path: 'add-center', component: AddCenterComponent }
  ] }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ]
})

export class CenterRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SantoshInteriorComponent } from './santosh-interior.component';

const routes: Routes = [
  {  path: '', component: SantoshInteriorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SantoshInteriorRoutingModule { }

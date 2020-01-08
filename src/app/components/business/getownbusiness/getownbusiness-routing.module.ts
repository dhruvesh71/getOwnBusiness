import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetownbusinessComponent } from './getownbusiness.component';

const routes: Routes = [{ path: '', component: GetownbusinessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetownbusinessRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetownbusinessRoutingModule } from './getownbusiness-routing.module';
import { GetownbusinessComponent } from './getownbusiness.component';
import { GetownbusinessHomeComponent } from './getownbusiness-home/getownbusiness-home.component';


@NgModule({
  declarations: [
    GetownbusinessComponent,
    GetownbusinessHomeComponent
  ],
  imports: [
    CommonModule,
    GetownbusinessRoutingModule
  ]
})
export class GetownbusinessModule { }

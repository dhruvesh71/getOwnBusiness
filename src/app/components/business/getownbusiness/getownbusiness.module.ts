import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetownbusinessRoutingModule } from './getownbusiness-routing.module';
import { GetownbusinessComponent } from './getownbusiness.component';
import { GetownbusinessHomeComponent } from './getownbusiness-home/getownbusiness-home.component';
import { GetownbusinessClientsComponent } from './getownbusiness-clients/getownbusiness-clients.component';
import { AngularMaterialModule } from '../../../modules/angular-material/angular-material.module';
import { GetownbusinessAboutComponent } from './getownbusiness-about/getownbusiness-about.component'


@NgModule({
  declarations: [
    GetownbusinessComponent,
    GetownbusinessHomeComponent,
    GetownbusinessClientsComponent,
    GetownbusinessAboutComponent
  ],
  imports: [
    CommonModule,
    GetownbusinessRoutingModule,
    AngularMaterialModule
  ]
})
export class GetownbusinessModule { }

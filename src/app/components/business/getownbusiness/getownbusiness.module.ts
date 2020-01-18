import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetownbusinessRoutingModule } from './getownbusiness-routing.module';
import { GetownbusinessComponent } from './getownbusiness.component';
import { GetownbusinessHomeComponent } from './getownbusiness-home/getownbusiness-home.component';
import { GetownbusinessClientsComponent } from './getownbusiness-clients/getownbusiness-clients.component';
import { AngularMaterialModule } from '../../../modules/angular-material/angular-material.module';
import { GetownbusinessContactComponent } from './getownbusiness-contact/getownbusiness-contact.component';
import { GetownbusinessFooterComponent } from './getownbusiness-footer/getownbusiness-footer.component';
import { GetownbusinessAboutOneComponent } from './getownbusiness-about-one/getownbusiness-about-one.component';
import { GetownbusinessAboutTwoComponent } from './getownbusiness-about-two/getownbusiness-about-two.component';
import { GetownbusinessAboutThreeComponent } from './getownbusiness-about-three/getownbusiness-about-three.component';
import { GetownbusinessAboutFourComponent } from './getownbusiness-about-four/getownbusiness-about-four.component'


@NgModule({
  declarations: [
    GetownbusinessComponent,
    GetownbusinessHomeComponent,
    GetownbusinessClientsComponent,
    GetownbusinessContactComponent,
    GetownbusinessFooterComponent,
    GetownbusinessAboutOneComponent,
    GetownbusinessAboutTwoComponent,
    GetownbusinessAboutThreeComponent,
    GetownbusinessAboutFourComponent
  ],
  imports: [
    CommonModule,
    GetownbusinessRoutingModule,
    AngularMaterialModule
  ]
})
export class GetownbusinessModule { }

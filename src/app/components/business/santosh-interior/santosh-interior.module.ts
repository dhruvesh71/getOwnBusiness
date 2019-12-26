import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SantoshInteriorRoutingModule } from './santosh-interior-routing.module';
import { SantoshInteriorComponent } from './santosh-interior.component';
import { SantoshInteriorHomeComponent } from './santosh-interior-home/santosh-interior-home.component';
import { SantoshInteriorOurClientsComponent } from './santosh-interior-our-clients/santosh-interior-our-clients.component';
import { ContactModule } from '../../common/contact/contact.module';


@NgModule({
  declarations: [
    SantoshInteriorComponent,
    SantoshInteriorHomeComponent,
    SantoshInteriorOurClientsComponent
  ],
  imports: [
    CommonModule,
    SantoshInteriorRoutingModule,
    ContactModule
  ],
})
export class SantoshInteriorModule { }

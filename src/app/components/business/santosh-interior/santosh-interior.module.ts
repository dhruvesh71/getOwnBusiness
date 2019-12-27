import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SantoshInteriorRoutingModule } from './santosh-interior-routing.module';
import { SantoshInteriorComponent } from './santosh-interior.component';
import { SantoshInteriorHomeComponent } from './santosh-interior-home/santosh-interior-home.component';
import { SantoshInteriorOurClientsComponent } from './santosh-interior-our-clients/santosh-interior-our-clients.component';
import { ContactModule } from '../../common/contact/contact.module';
import { SantoshInteriorWhatWeDoComponent } from './santosh-interior-what-we-do/santosh-interior-what-we-do.component';
import { FooterComponent } from '../../common/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    SantoshInteriorComponent,
    SantoshInteriorHomeComponent,
    SantoshInteriorOurClientsComponent,
    SantoshInteriorWhatWeDoComponent
  ],
  imports: [
    CommonModule,
    SantoshInteriorRoutingModule,
    ContactModule,
  ],
})
export class SantoshInteriorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SantoshInteriorRoutingModule } from './santosh-interior-routing.module';
import { SantoshInteriorComponent } from './santosh-interior.component';
import { SantoshInteriorHomeComponent } from './santosh-interior-home/santosh-interior-home.component';
import { SantoshInteriorOurClientsComponent } from './santosh-interior-our-clients/santosh-interior-our-clients.component';
import { SantoshInteriorWhatWeDoComponent } from './santosh-interior-what-we-do/santosh-interior-what-we-do.component';
import { SantoshInteriorClientDetailsComponent } from './santosh-interior-client-details/santosh-interior-client-details.component';
import { SantoshInteriorFooterComponent } from './santosh-interior-footer/santosh-interior-footer.component';
import { SantoshInteriorContactComponent } from './santosh-interior-contact/santosh-interior-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule,
  MatDividerModule, MatSnackBarModule, MatDialogModule, MatExpansionModule, MatCardModule, MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [
    SantoshInteriorComponent,
    SantoshInteriorHomeComponent,
    SantoshInteriorOurClientsComponent,
    SantoshInteriorWhatWeDoComponent,
    SantoshInteriorClientDetailsComponent,
    SantoshInteriorFooterComponent,
    SantoshInteriorContactComponent,
  ],
  imports: [
    CommonModule,
    SantoshInteriorRoutingModule,
    ReactiveFormsModule,
    MatButtonModule, MatInputModule, MatFormFieldModule,
    MatSelectModule, MatDividerModule, MatSnackBarModule, MatDialogModule,
    MatExpansionModule, MatCardModule, MatTabsModule
  ],
  entryComponents: [SantoshInteriorClientDetailsComponent]
})
export class SantoshInteriorModule { }

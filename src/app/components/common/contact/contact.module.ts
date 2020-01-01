import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule,
  MatDividerModule, MatSnackBarModule, MatDialogModule, MatExpansionModule, MatCardModule, MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    MatButtonModule, MatInputModule, MatFormFieldModule,
    MatSelectModule, MatDividerModule, MatSnackBarModule, MatDialogModule,
    MatExpansionModule, MatCardModule, MatTabsModule
  ],
  exports: [ContactComponent, MatDividerModule, MatExpansionModule, MatCardModule, MatTabsModule]
})
export class ContactModule { }

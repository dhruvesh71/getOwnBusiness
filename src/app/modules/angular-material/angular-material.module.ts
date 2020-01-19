import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule,
  MatDividerModule, MatSnackBarModule, MatDialogModule, MatExpansionModule,
  MatCardModule, MatTabsModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatButtonModule, MatInputModule, MatFormFieldModule,
    MatSelectModule, MatDividerModule, MatSnackBarModule,
    MatDialogModule, MatExpansionModule, MatCardModule,
    MatTabsModule
  ]
})
export class AngularMaterialModule { }

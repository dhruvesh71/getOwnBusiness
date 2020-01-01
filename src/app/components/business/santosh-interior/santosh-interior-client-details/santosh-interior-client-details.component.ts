import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-santosh-interior-client-details',
  templateUrl: './santosh-interior-client-details.component.html',
  styleUrls: ['./santosh-interior-client-details.component.scss']
})
export class SantoshInteriorClientDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SantoshInteriorClientDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() { }
}

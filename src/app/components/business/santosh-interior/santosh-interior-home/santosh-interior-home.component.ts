import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-santosh-interior-home',
  templateUrl: './santosh-interior-home.component.html',
  styleUrls: ['./santosh-interior-home.component.scss']
})
export class SantoshInteriorHomeComponent implements OnInit {

  public businessTitle: string;

  constructor() {
    this.businessTitle = 'santosh interior';
   }

  ngOnInit() {
  }

}

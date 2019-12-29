import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-santosh-interior-what-we-do',
  templateUrl: './santosh-interior-what-we-do.component.html',
  styleUrls: ['./santosh-interior-what-we-do.component.scss']
})
export class SantoshInteriorWhatWeDoComponent implements OnInit {

  public title: string;
  public description: string;

  constructor() {
    this.title = 'What we do';
    this.description = 'Santosh Interiors has an working expierence of 10 years in Home interior designing. '
     + 'We take contracts of wall painting, Kitchen furnishing, Tiles, Flooring, Plumbing, Window Sliding,'
     +' Civil contractor.'
   }

  ngOnInit() {
  }

}

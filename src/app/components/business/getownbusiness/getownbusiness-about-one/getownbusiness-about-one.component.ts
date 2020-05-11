import { Component, OnInit } from '@angular/core';

declare let WOW: any;
@Component({
  selector: 'app-getownbusiness-about-one',
  templateUrl: './getownbusiness-about-one.component.html',
  styleUrls: ['./getownbusiness-about-one.component.scss']
})
export class GetownbusinessAboutOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new WOW().init();
    
  }
}

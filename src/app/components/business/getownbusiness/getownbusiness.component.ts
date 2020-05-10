import { Component, OnInit, HostListener } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-getownbusiness',
  templateUrl: './getownbusiness.component.html',
  styleUrls: ['./getownbusiness.component.scss']
})
export class GetownbusinessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new WOW(  {  live: false}).init();
  }

  scrollToPage(page: HTMLElement) {
    page.scrollIntoView({ behavior: 'smooth' });
  }
}

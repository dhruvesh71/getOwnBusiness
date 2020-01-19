import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getownbusiness',
  templateUrl: './getownbusiness.component.html',
  styleUrls: ['./getownbusiness.component.scss']
})
export class GetownbusinessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToPage(page: HTMLElement) {
    page.scrollIntoView({ behavior: 'smooth' });
  }

}

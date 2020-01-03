import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-santosh-interior',
  templateUrl: './santosh-interior.component.html',
  styleUrls: ['./santosh-interior.component.scss']
})
export class SantoshInteriorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToPage(page: HTMLElement) {
    page.scrollIntoView({ behavior: 'smooth' });
  }
}

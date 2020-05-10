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
    new WOW().init();
  }

  scrollToPage(page: HTMLElement) {
    page.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('document:scroll', ['$event'])
  documentScroll(event: any) {

    var header = document.getElementById("header");
    var home = document.getElementById("home");
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 480) {

      header.style.backgroundColor = "#fff";
      header.style.color = "#000";
      header.style.position = "fixed";
      header.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
      header.style.fontSize = "8px";

    } else {
      header.style.position = "absolute";
      header.style.backgroundColor = "transparent";
      header.style.color = "#fff";
      header.style.borderBottom = "none";
      header.style.fontSize = "20px";

    }
    home.style.transform = `translate3d(0px, ${scrollPosition/3}px, 0px)`;
  }
}

import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostListener('document:scroll', ['$event'])
  documentScroll(event: any) {

    const scrollPosition = window.scrollY;
    this.displayHeaderOnScroll(scrollPosition);

  }

  private displayHeaderOnScroll(scrollPosition: number): void {
    const header = document.getElementById('header');
    const home = document.getElementById('home');

    if (scrollPosition >= 400) {
      header.style.backgroundColor = '#fff';
      header.style.color = '#000';
      header.style.position = 'fixed';
      header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.2)';
    } else {
      header.style.position = 'absolute';
      header.style.backgroundColor = 'transparent';
      header.style.color = '#fff';
      header.style.borderBottom = 'none';
    }

    home.style.transform = `translate3d(0px, ${scrollPosition / 3}px, 0px)`;
  }
}

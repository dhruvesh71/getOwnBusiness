import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavigation]'
})
export class NavigationDirective {

  constructor() { }

  @HostListener('document:scroll', ['$event'])
  documentScroll(event: any) {
    console.log('scroll');
    console.log(window.scrollY);
  }
}

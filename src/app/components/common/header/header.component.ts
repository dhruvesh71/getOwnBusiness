import { Component, OnInit } from '@angular/core';
import { IHeaderButton } from 'src/app/interfaces/header-component-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerButtons: IHeaderButton[];

  constructor() {

    this.headerButtons = [
      { buttonTitle: 'Home', routerLink: '/santoshInterior', showButton: true },
      { buttonTitle: 'What we do', routerLink: '/santoshInterior', showButton: true },
      { buttonTitle: 'Our Clients', routerLink: '/santoshInterior', showButton: true },
      { buttonTitle: 'Contact us', routerLink: '/santoshInterior', showButton: true }
    ];

    this.headerButtons = this.headerButtons.slice().reverse();

  }

  ngOnInit() {
  }

}

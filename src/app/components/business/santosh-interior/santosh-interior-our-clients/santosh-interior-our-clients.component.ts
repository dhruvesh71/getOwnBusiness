import { Component, OnInit } from '@angular/core';
import { IOurClientData } from 'src/app/interfaces/our-clients-data';

@Component({
  selector: 'app-santosh-interior-our-clients',
  templateUrl: './santosh-interior-our-clients.component.html',
  styleUrls: ['./santosh-interior-our-clients.component.scss']
})
export class SantoshInteriorOurClientsComponent implements OnInit {

  public ourClients: IOurClientData[];
  constructor() { }

  ngOnInit() {

    this.ourClients = [
      { location: 'Thane', work: 'Pipe Fitting' },
      { location: 'Airoli', work: 'Kitchen' },
      { location: 'Mulund', work: 'Kitchen' },
      { location: 'Kalwa', work: 'Kitchen' }
    ];
  }

}

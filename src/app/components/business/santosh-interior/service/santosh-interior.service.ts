import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IOurClientData } from 'src/app/interfaces/our-clients-data';

@Injectable({
  providedIn: 'root'
})
export class SantoshInteriorService {

  constructor() { }

  public getSantoshInteriorOurClientsComponentData(): Observable<IOurClientData[]> {

    const ourClients: IOurClientData[] = [
      { location: 'Thane', work: 'Pipe Fitting' },
      { location: 'Airoli', work: 'Kitchen' },
      { location: 'Mulund', work: 'Kitchen' },
      { location: 'Kalwa', work: 'Kitchen' }
    ];

    const ourClientData = new BehaviorSubject<IOurClientData[]>(ourClients);

    return ourClientData;
  }
}

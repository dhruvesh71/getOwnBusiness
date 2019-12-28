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
      { clientName: 'Swati', location: 'Thane', work: 'Pipe Fitting', budget: '20K', numberOfDaysTook: '1 month', whenDidWorkDone: 'Aug-2019', imageUrl: ['../../../../../assets/santoshInteriors/client1.jpg', '../../../../../assets/santoshInteriors/client3.jpg'] },
      { clientName: 'Ajay interprise', location: 'Ghatkopar', work: 'Furniture', budget: '1L', numberOfDaysTook: '4 month', whenDidWorkDone: 'Jan-2018', imageUrl: ['../../../../../assets/santoshInteriors/client2.jpg'] },
      { clientName: 'Shreeram securities', location: 'Airoli', work: 'Tile fitting', budget: '76K', numberOfDaysTook: '1.5 month', whenDidWorkDone: 'Jun-2019', imageUrl: ['../../../../../assets/santoshInteriors/client3.jpg'] },
      { clientName: 'Raja', location: 'Vashi', work: 'Pipeline', budget: '80K', numberOfDaysTook: '3 month', whenDidWorkDone: 'Jan-2018', imageUrl: ['../../../../../assets/santoshInteriors/client1.jpg'] }
    ];

    const ourClientData = new BehaviorSubject<IOurClientData[]>(ourClients);

    return ourClientData;
  }
}

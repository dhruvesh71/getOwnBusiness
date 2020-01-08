import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOurClientData } from 'src/app/interfaces/our-clients-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SantoshInteriorService {

  constructor(private http: HttpClient) { }

  public getSantoshInteriorOurClientsComponentData(): Observable<IOurClientData[]> {

    return this.http.get<IOurClientData[]>
      ('../../../../../assets/json/santosh_interior_client_data.json');
  }
}

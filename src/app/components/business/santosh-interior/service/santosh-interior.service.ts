import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOurClientData } from 'src/app/interfaces/our-clients-data';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseDatabase, FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class SantoshInteriorService {

  constructor(private http: HttpClient, public db: AngularFirestore, public firebase: FirebaseApp) { }

  public getSantoshInteriorOurClientsComponentData(): Observable<IOurClientData[]> {

    return this.http.get<IOurClientData[]>
      ('../../../../../assets/json/santosh_interior_client_data.json');
  }

  public addQuery(name: string, regarding: string, contactNumber: number) {
    this.db.collection('queries')
      .add({
        name: name,
        regarding: regarding,
        contact_number: contactNumber
      });
  }
}

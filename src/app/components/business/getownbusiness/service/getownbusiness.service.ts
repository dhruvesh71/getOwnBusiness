import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class GetownbusinessService {

  constructor(private http: HttpClient, public db: AngularFirestore, public firebase: FirebaseApp) { }

  public addQuery(name: string, regarding: string, contactNumber: number) {
    this.db.collection('queries')
      .add({
        name: name,
        regarding: regarding,
        contactNumber: contactNumber
      });
  }
}

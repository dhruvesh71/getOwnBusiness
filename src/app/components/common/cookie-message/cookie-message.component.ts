import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-cookie-message',
  templateUrl: './cookie-message.component.html',
  styleUrls: ['./cookie-message.component.scss']
})
export class CookieMessageComponent implements OnInit {

  constructor(private matBottomSheetRef: MatBottomSheetRef) { }

  ngOnInit() {
  }

  close() {
    this.matBottomSheetRef.dismiss();
  }

}

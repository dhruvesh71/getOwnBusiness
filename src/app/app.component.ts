import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CookieMessageComponent } from './components/common/cookie-message/cookie-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private matBottomSheet: MatBottomSheet) { }

  ngOnInit(): void {

    const currentUrl: string = window.location.href;

    if (currentUrl.includes('santosh')) {
      this.router.navigateByUrl('santoshinterior');
    } else if (currentUrl.includes('getownbusiness')) {
      this.router.navigateByUrl('getownbusiness');
    }

    // For Production
    // window.onload = () => {
    //   console.clear();
    // };

    // To show cookies message
    this.matBottomSheet.open(CookieMessageComponent);
  }

}

import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    const currentUrl: string = window.location.href;

    if (currentUrl.includes('santosh')) {
      this.router.navigateByUrl('santoshinterior');
    }
  }
}

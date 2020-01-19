import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public isLoading: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {

    const currentUrl: string = window.location.href;

    if (currentUrl.includes('santosh')) {
      this.router.navigateByUrl('santoshinterior');
    }

    if (currentUrl.includes('getownbusiness')) {
      this.router.navigateByUrl('getownbusiness');
    }

    // For Production
    window.onload = () => {
      console.clear();
    }
  }

  ngAfterViewInit(): void {
    this.isLoading = false;
  }
}

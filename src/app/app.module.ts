import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './components/common/error-page/error-page.component';
import { ErrorMessageComponent } from './components/common/error-message/error-message.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CookieMessageComponent } from './components/common/cookie-message/cookie-message.component';
import { MatBottomSheetModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ErrorMessageComponent,
    CookieMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatBottomSheetModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ErrorMessageComponent, CookieMessageComponent],
})
export class AppModule { }

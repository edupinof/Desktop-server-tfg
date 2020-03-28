import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "./../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import * as firebase from 'firebase/app';
import { DigitalClockComponent } from './widgets/digital-clock/digital-clock.component';
import { WeatherComponent } from './widgets/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { StocksComponent } from './widgets/stocks/stocks.component';
import { NewsComponent } from './widgets/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent,
    WeatherComponent,
    StocksComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

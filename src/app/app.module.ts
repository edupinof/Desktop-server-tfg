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
import { SantoComponent } from './widgets/santo/santo.component';
import { MotivationComponent } from './widgets/motivation/motivation.component';
// Import ngx-twitter-timeline
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { TwitterComponent } from './widgets/twitter/twitter.component';
@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent,
    WeatherComponent,
    StocksComponent,
    NewsComponent,
    SantoComponent,
    MotivationComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

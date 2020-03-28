import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desktop-server-tfg';
  digitalClock: any;
  weather: any;
  stocks: any;
  constructor(  ) {
    firebase.initializeApp(environment.firebaseConfig);
    const dbRefConfObject = firebase.database().ref().child('configuracion');
    dbRefConfObject.on('value', snap => {
      console.log(snap.val());
      document.getElementById('body').style.backgroundColor = snap.val()['background-body'];
      document.getElementById('body').style.color = snap.val()['font-color'];
      
    });

    const dbDigitalClockObject = firebase.database().ref().child('digital-clock');
    dbDigitalClockObject.on('value', snap => {
      console.log(snap.val());
      if (snap.val()['block'] > 0 && snap.val()['block'] < 10){
        this.digitalClock =  snap.val()['block'];
      } else {
        this.digitalClock = 0;
      }    
    });

    const dbWeatherObject = firebase.database().ref().child('weather');
    dbWeatherObject.on('value', snap => {
      console.log(snap.val());
      if (snap.val()['block'] > 0 && snap.val()['block'] < 10){
        this.weather =  snap.val()['block'];
      } else {
        this.weather = 0;
      }      
    });

    const dbStocksObject = firebase.database().ref().child('stocks');
    dbStocksObject.on('value', snap => {
      console.log(snap.val());
      if (snap.val()['block'] > 0 && snap.val()['block'] < 10){
        this.stocks =  snap.val()['block'];
      } else {
        this.stocks = 0;
      }     
    });
  }

}

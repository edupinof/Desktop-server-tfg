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
  news: any;
  santo: any;
  motivation: any;
  twitter: any;
  constructor(  ) {
    firebase.initializeApp(environment.firebaseConfig);
    const dbRefConfObject = firebase.database().ref().child('configuracion');
    dbRefConfObject.on('value', snap => {
      console.log(snap.val());
      document.getElementById('body').style.backgroundColor = snap.val()['background-body'];
      document.getElementById('body').style.color = snap.val()['font-color'];
      
    });

    const dbRefBgObject = firebase.database().ref().child('background-image');
    dbRefBgObject.on('value', snap => {
      console.log(snap.val());
      document.getElementById('body').style['background-image'] = 'url(' + snap.val()['url'] + ')';
      document.getElementById('body').style['background-size'] = 'cover';
      document.getElementById('body').style['background-attachment'] = 'fixed';
      document.getElementById('body').style['background-repeat'] = 'no-repeat';
   
      
    });

    const dbRefColorFontObject = firebase.database().ref().child('color-font');
    dbRefColorFontObject.on('value', snap => {
      console.log(snap.val());
      document.getElementById('body').style['color'] = snap.val()['color'];
   
      
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

  

    const dbNewsObject = firebase.database().ref().child('news');
    dbNewsObject.on('value', snap => {
      console.log(snap.val());
      if (snap.val()['block'] > 0 && snap.val()['block'] < 10){
        this.news =  snap.val()['block'];
      } else {
        this.news = 0;
      }     
    });

    const dbSantoObject = firebase.database().ref().child('santo');
    dbSantoObject.on('value', snap => {
      console.log(snap.val());
      if (snap.val()['block'] > 0 && snap.val()['block'] < 10){
        this.santo =  snap.val()['block'];
      } else {
        this.santo = 0;
      }     
    });

    const dbMotivationObject = firebase.database().ref().child('motivation');
    dbMotivationObject.on('value', snap => {
      console.log(snap.val());
      if (snap.val()['block'] > 0 && snap.val()['block'] < 10){
        this.motivation =  snap.val()['block'];
      } else {
        this.motivation = 0;
      }     
    });

    const dbTwitterObject = firebase.database().ref().child('twitter');
    dbTwitterObject.on('value', snap => {
      console.log(snap.val());
      if (snap.val()['block'] > 0 && snap.val()['block'] < 10){
        this.twitter =  snap.val()['block'];
      } else {
        this.twitter = 0;
      }     
    });

  }

}

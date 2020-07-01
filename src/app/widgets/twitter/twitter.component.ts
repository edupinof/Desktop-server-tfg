import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  userName: any;

  constructor(private apiservice: ApiService) {  
    const dbStocksNameObject = firebase.database().ref().child('TwitterName');
    dbStocksNameObject.on('value', snap => {
      console.log();
     
      this.userName = snap.val()['name'];

    });

  }

  ngOnInit() {
  }

}

import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stockName;
  stocks: any;
  weatherIcon: string;
  constructor(private apiservice: ApiService) {

    const dbStocksNameObject = firebase.database().ref().child('stocksName');
    dbStocksNameObject.on('value', snap => {
      console.log(snap.val());
      this.stockName = snap.val()['name'].split('(')[1];
      this.stockName =this.stockName.split(')')[0];
      this.getStocks();
    });
  }
 
  

  getStocks() {
    if (this.stockName){
      this.apiservice.getStocks(this.stockName).subscribe((stocks) => {
        this.stocks = stocks;
        console.log(this.stocks);

      });
      }
    window.setInterval(() => {

    if (this.stockName){
      this.apiservice.getStocks(this.stockName).subscribe((stocks) => {
        this.stocks = stocks;
        console.log(this.stocks);
      });
      }
    }, 1800000)

  }
  
  
  ngOnInit() {
  }
}

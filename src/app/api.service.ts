import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: { headers: HttpHeaders; };

  constructor(private httpClient: HttpClient) {
    this.headers = {
      headers: new HttpHeaders({
        "Content-Type":
          "application/json" 
      })
    };
   }

  getWeather(idCity){
    const uri = `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&units=metric&appid=8c87a208f5b73cbb6da6106685db4567`;
    return this.httpClient.get(uri);
  }

  getStocks(stockName) {
    const uri = `https://api.marketstack.com/v1/eod?symbols=${stockName}&access_key=1c8dbca1399932baad67e62221fd534a`;
    return this.httpClient.get(uri);
  }

  getNews() {
    const uri = `https://node-tfg-server.oa.r.appspot.com/news`;
    return this.httpClient.get(uri);

  }

  getMotivation(){
    const uri = `https://node-tfg-server.oa.r.appspot.com/motivation`;
    return this.httpClient.get(uri);

  }
}

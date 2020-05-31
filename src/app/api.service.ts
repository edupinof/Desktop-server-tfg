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
    const uri = `https://api.worldtradingdata.com/api/v1/stock?symbol=${stockName}&api_token=htBe6i5KYZzbivSnp7GgcXvZxBnNO85dcmLqAhMBR0yYqk16g9KdbpfqHOwM`;
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

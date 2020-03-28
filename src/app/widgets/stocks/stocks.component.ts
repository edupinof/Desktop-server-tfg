import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  weather: any;
  weatherIcon: string;
  constructor(private apiservice: ApiService) {
    this.getStocks();
    window.setInterval(() => {
      this.getStocks();
    }, 1800000)
  }

  getStocks() {
    this.apiservice.getStocks('AAPL').subscribe((weather) => {
      this.weather = weather;
      console.log(this.weather);
      this.weatherIcon = 'http://openweathermap.org/img/wn/' + this.weather.weather[0].icon + '@2x.png';
      let example = {"coord":{"lon":-3.69,"lat":40.43},
      "weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"base":"stations","main":{"temp":278.38,"feels_like":273.18,"temp_min":277.59,"temp_max":279.26,"pressure":1016,"humidity":81},"visibility":10000,"wind":{"speed":5.1,"deg":40,"gust":10.3},"clouds":{"all":90},"dt":1579629860,"sys":{"type":1,"id":6443,"country":"ES","sunrise":1579591990,"sunset":1579627095},"timezone":3600,"id":3117732,"name":"Madrid","cod":200};
    });
  }
  
  
  ngOnInit() {
  }
}

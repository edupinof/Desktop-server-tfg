import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  listCities = [{
    "id": 3117732,
    "name": "Comunidad de Madrid",
    "country": "ES",
    "coord": {
      "lon": -3.69063,
      "lat": 40.425259
    }
  },{
    "id": 6356055,
    "name": "Barcelona",
    "country": "ES",
    "coord": {
      "lon": 2.12804,
      "lat": 41.399422
    }
  }];
  weather: any;
  weatherIcon: string;
  constructor(private apiservice: ApiService) {
    this.getWeather();
    window.setInterval(() => {
      this.getWeather();
    }, 1800000)
  }

  getWeather() {
    this.apiservice.getWeather(3117732).subscribe((weather) => {
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

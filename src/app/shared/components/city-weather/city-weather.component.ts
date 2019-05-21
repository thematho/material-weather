import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { City } from '../../models/city';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent implements OnInit {
  @Input() city: City;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  getWeather(id: number) {
    this.weatherService.getWeather(id).subscribe(response => {
      console.log(response);
    });
  }
}

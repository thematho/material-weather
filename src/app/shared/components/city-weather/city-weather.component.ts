import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { OpenWeather } from '../../models/open-weather.';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent implements OnInit {
  @Input() cityWeather: OpenWeather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

}

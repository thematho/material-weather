import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { OpenWeather } from '../../models/open-weather.';
import { Forecast } from '../../models/forecast';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent implements OnInit {
  @Input() cityWeather: OpenWeather;
  @Input() forecast: Forecast;
  @Output() refresh: EventEmitter<number> = new EventEmitter<number>();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() { }

  refreshWeather(event: Event, id: number) {
    this.refresh.emit(id);
    event.stopPropagation();
  }
}

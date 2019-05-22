import { Component, OnInit } from '@angular/core';
import { CityWeatherService } from 'src/app/shared/services/city-weather.service';
import { OpenWeather } from 'src/app/shared/models/open-weather.';
import { ForecastService } from 'src/app/shared/services/forecast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  citiesWeather: OpenWeather[] = [];

  constructor(
    private citiesService: CityWeatherService,
    private forecastService: ForecastService
  ) { }

  ngOnInit() {
    this.citiesService.getCities()
      .subscribe(({ id, name, main, wind }) => {
        this.citiesWeather.push(new OpenWeather(id, name, main, wind));
      });
  }

  refreshWeather(id: number) {
    this.citiesService.getCityWeather(id).subscribe(weather => {
      const index = this.citiesWeather.findIndex(c => c.id === id);
      if (~index) {
        this.citiesWeather[index] = Object.assign(this.citiesWeather[index], weather);
      }
    });

  }
  getWeather(weather) {
    if (weather.show) {
      weather.show = false;
    } else {
      weather.loading = true;
      this.forecastService.getWeather(weather.id)
        .subscribe(forecast => {
          weather.forecast = forecast;
          weather.show = true;
          weather.loading = false;
        });
    }
  }
}

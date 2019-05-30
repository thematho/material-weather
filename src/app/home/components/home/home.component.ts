import { Component, OnInit } from '@angular/core';
import { CityWeatherService } from 'src/app/shared/services/city-weather.service';
import { OpenWeather } from 'src/app/shared/models/open-weather.';
import { ForecastService } from 'src/app/shared/services/forecast.service';
import { CityWeatherComponent } from 'src/app/shared/shared.module';

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
    const index = this.citiesWeather.findIndex(c => c.id === id);
    if (~index) {
      this.citiesWeather[index].loading = true;
      this.citiesService.getCityWeather(id).subscribe(weather => {
        this.citiesWeather[index] = Object.assign(this.citiesWeather[index], weather);
        this.citiesWeather[index].loading = false;
      });
    }

  }
  getWeather(weather: OpenWeather, component: CityWeatherComponent) {
    if (component.showDetails) {
      component.toggleVisibility();
    } else {
      weather.loading = true;
      this.forecastService.getWeather(weather.id)
      .subscribe(forecast => {
        weather.forecast = forecast;
        component.toggleVisibility();
          weather.loading = false;
        });
    }
  }
}

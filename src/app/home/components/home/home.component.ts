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

  refreshWeather(component: CityWeatherComponent) {
    component.loading = true;
    this.citiesService.getCityWeather(component.cityWeather.id).subscribe(weather => {
      component.cityWeather = Object.assign(component.cityWeather, weather);
      component.loading = false;
    });
  }
  getWeather(component: CityWeatherComponent) {
    if (component.showDetails) {
      component.toggleVisibility();
    } else {
      component.loading = true;
      this.forecastService.getWeather(component.cityWeather.id)
        .subscribe(forecast => {
          component.cityWeather.forecast = forecast;
          component.toggleVisibility();
          component.loading = false;
        });
    }
  }
}

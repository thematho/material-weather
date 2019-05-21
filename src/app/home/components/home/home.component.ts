import { Component, OnInit } from '@angular/core';
import { CityWeatherService } from 'src/app/shared/services/city-weather.service';
import { OpenWeather } from 'src/app/shared/models/open-weather.';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  citiesWeather: OpenWeather[] = [];

  constructor(private citiesService: CityWeatherService) {
    citiesService.getCities()
      .subscribe(({ id, name, main, wind }) => {
        this.citiesWeather.push(new OpenWeather(id, name, main, wind));
      });
  }

  ngOnInit() {
  }

}

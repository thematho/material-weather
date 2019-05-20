import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { CitiesService } from './services/cities.service';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';

@NgModule({
  declarations: [CityWeatherComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    CitiesService,
    WeatherService,
    CityWeatherComponent,
  ]
})
export class SharedModule { }

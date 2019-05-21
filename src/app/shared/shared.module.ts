import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WeatherService } from './services/weather.service';
import { CitiesService } from './services/cities.service';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CityWeatherComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CityWeatherComponent,
  ],
  providers: [
    CitiesService,
    WeatherService,
  ]
})
export class SharedModule { }
export { CityWeatherComponent };
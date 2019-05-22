import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WeatherService } from './services/weather.service';
import { CityWeatherService } from './services/city-weather.service';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import {
  MatCardModule, MatDividerModule, MatProgressBarModule,
  MatButtonModule, MatIconModule, MatRippleModule
} from '@angular/material';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    CityWeatherComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
  ],
  exports: [
    CityWeatherComponent,
  ],
  providers: [
    CityWeatherService,
    WeatherService,
  ]
})
export class SharedModule { }
export { CityWeatherComponent };
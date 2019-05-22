import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { concatMap, delay, mergeMap, map } from 'rxjs/internal/operators';

import { City } from '../models/city';

import * as mockData from './city-list.json';
import { WeatherService } from './weather.service';
import { OpenWeather } from '../models/open-weather.';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherService {
  private citiesList: Array<City> = [mockData.cities[0], mockData.cities[1]];
  private baseURL = `api.openweathermap.org/data/2.5/weather?id=`;

  constructor(private weatherService: WeatherService) { }

  /**
   * Emulates an Observable of HTTP request for a list of cities
   * Currently https://openweathermap.org does not provide a city API itself
   * We read the list from a static JSON and create and Observable that
   * returns Cities over time
   */
  public getCities(): Observable<OpenWeather> {
    return from(this.citiesList)
      .pipe(
        // Emulate HTTP request delay
        concatMap(city => of(city).pipe(delay(Math.random() * 500)))
      )
      .pipe(
        mergeMap(city => this.getCityWeather(city.id))
      );
  }

  public getCityWeather(id: number): Observable<OpenWeather> {
    return this.weatherService.getWeather(id);
  }
}

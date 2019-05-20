import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/internal/operators';

import { City } from '../models/city';

import * as mockData from './city-list.json';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private citiesList: Array<City> = mockData.cities;
  private baseURL = `api.openweathermap.org/data/2.5/weather?id=`;
  
  constructor() { }
  
  /**
   * Emulates an Observable of HTTP request for a list of cities
   * Currently https://openweathermap.org does not provide a city API itself
   * We read the list from a static JSON and create and Observable that
   * returns Cities over time
   */
  public getCities(): Observable<City> {
    return from(this.citiesList)
      .pipe(
        concatMap(city => of(city).pipe(delay(Math.random() * 1000)))
      );
  }
}

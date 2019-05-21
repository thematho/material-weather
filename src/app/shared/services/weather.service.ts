import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServiceSettings } from './service.settings';
import { OpenWeather } from '../models/open-weather.';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeather(id: number): Observable<OpenWeather> {
    return this.http.get<OpenWeather>(ServiceSettings.getWeatherURL(id));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServiceSettings } from './service.settings';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeather(id: number): Observable<Weather> {
    return this.http.get<Weather>(ServiceSettings.getWeatherURL(id));
  }
}

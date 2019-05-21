import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forecast } from "../models/forecast";
import { ServiceSettings } from './service.settings';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  public getWeather(id: number): Observable<Forecast> {
    return this.http.get<Forecast>(ServiceSettings.getForecastURL(id));
  }
}

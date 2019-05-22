import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Forecast } from "../models/forecast";
import { ServiceSettings } from './service.settings';
import { concatMap, delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  public getWeather(id: number): Observable<Forecast> {
    return this.http.get<Forecast>(ServiceSettings.getForecastURL(id))
    .pipe(
      // Emulate HTTP request delay just to showcase loading
      concatMap(forecast => of(forecast).pipe(delay(Math.random() * 1000)))
    );
  }
}

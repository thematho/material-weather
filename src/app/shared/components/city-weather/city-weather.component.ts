import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { OpenWeather } from '../../models/open-weather.';
import { Forecast } from '../../models/forecast';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent implements OnInit {
  @Input() cityWeather: OpenWeather;
  @Input() forecast: Forecast;
  @Output() refresh: EventEmitter<number> = new EventEmitter<number>();
  public focus: boolean;
  public showDetails: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() { }
  @HostListener('mouseenter')
  @HostListener('touchstart')
  onMouseEnter() {
    this.focus = true;
  }

  @HostListener('mouseleave')
  @HostListener('touchend')
  onMouseLeave() {
    this.focus = false;
  }
  refreshWeather(event: Event, id: number) {
    this.refresh.emit(id);
    event.stopPropagation();
  }
  toggleVisibility(){
    this.showDetails = !this.showDetails;
  }
}

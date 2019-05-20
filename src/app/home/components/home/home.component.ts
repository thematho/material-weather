import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/shared/services/cities.service';
import { City } from 'src/app/shared/models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  cities: City[] = [];

  constructor(citiesService: CitiesService) {
    citiesService.getCities()
      .subscribe(city => {
        const newCity = new City(city.id, city.name, city.country, { lat: city.coord.lat, lon: city.coord.lon });
        this.cities.push(newCity);
      });
  }

  ngOnInit() {
  }

}

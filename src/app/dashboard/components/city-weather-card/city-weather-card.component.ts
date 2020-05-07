import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/core/models/City';
import { FavoriteCitiesService } from 'src/app/core/services/favorite-cities/favorite-cities.service';

@Component({
  selector: 'city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss'],
})
export class CityWeatherCardComponent implements OnInit {
  @Input() city: City;
  constructor(private favoriteCitiesService: FavoriteCitiesService) {}

  ngOnInit(): void {}

  removeFromFav(): void {
    this.favoriteCitiesService.toggleCity(this.city)
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/core/models/City';
import { FormControl } from '@angular/forms';
import { FavoriteCitiesService } from 'src/app/core/services/favorite-cities/favorite-cities.service';

@Component({
  selector: 'city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnInit {
  @Input() city: City;
  isFav = new FormControl();
  constructor(private favoriteCitiesService: FavoriteCitiesService) {}

  ngOnInit(): void {
    this.isFav.setValue(this.favoriteCitiesService.isFavorite(this.city));
    this.observeCheckChange();
  }

  observeCheckChange(): void {
    this.isFav.valueChanges.subscribe((change) => {
      this.favoriteCitiesService.toggleCity(this.city);
    });
  }
}

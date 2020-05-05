import { Component, OnInit } from '@angular/core';
import { FavoriteCitiesService } from 'src/app/core/favorite-cities/favorite-cities.service';
import { City } from 'src/app/core/models/City';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  favoriteCities: City[] = [];
  constructor(private favoriteCitiesService: FavoriteCitiesService) {}

  ngOnInit(): void {
    this.favoriteCitiesService.favorites$().subscribe((citiesList) => {
      this.favoriteCities = citiesList;
    });
  }
}

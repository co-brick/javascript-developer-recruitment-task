import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { City } from '../../models/City';
import { convertStoredObjectToCity } from '../../models/mappsers';
import { LocalStarageService } from '../local-storage/local-starage.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteCitiesService {
  private favoriteCitiesSubj = new BehaviorSubject<City[]>([]);
  
  constructor(private localStorageService: LocalStarageService) {
    this.favoriteCitiesSubj.next(
      this.convertToArray(localStorageService.getFavouriteCities())
      )
  }

  toggleCity(city: City): void {
    let favoriteCities = this.localStorageService.getFavouriteCities();
    const id = city.id.toString();
    const updatedFavorites = (() => {
      if (favoriteCities[id]) {
        return this.removeCity(city, favoriteCities);
      } else {
        return this.addCity(city, favoriteCities);
      }
    })();
    this.localStorageService.saveFavouiteCities(updatedFavorites);
    this.favoriteCitiesSubj.next(this.convertToArray(updatedFavorites));
  }

  getFavuoriteCities(): Object {
    return this.localStorageService.getFavouriteCities();
  }

  getFavouriteCitiesArr(): City[] {
    return this.convertToArray(this.getFavuoriteCities());
  }

  isFavorite(city: City): boolean {
    return this.getFavuoriteCities()[city.id.toString()];
  }

  favorites$(): Observable<City[]> {
    return this.favoriteCitiesSubj;
  }

  saveCities(cities: City[]) {
    let favoriteCities = this.localStorageService.getFavouriteCities();
    cities.forEach((city) => {
      favoriteCities = this.addCity(city, favoriteCities);
    });
    this.localStorageService.saveFavouiteCities(favoriteCities);
    this.favoriteCitiesSubj.next(this.convertToArray(favoriteCities));
  }

  private removeCity(city: City, citiesObj: Object) {
    const result = { ...citiesObj };
    delete result[city.id.toString()];
    return result;
  }

  private addCity(city: City, favoriteCities: Object) {
    const id = city.id.toString();
    return { ...favoriteCities, [id]: city };
  }

  private convertToArray(data: Object): City[] {
    return Object.entries(data).map(([, value]) =>
      convertStoredObjectToCity(value)
    );
  }
}

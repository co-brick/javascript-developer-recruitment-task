import { Injectable } from '@angular/core';
import { City } from '../models/City';

@Injectable({
  providedIn: 'root',
})
export class FavoriteCitiesService {
  private static LOCAL_STORAGE: string = 'favoriteCities';
  constructor() {}

  toggleCity(city: City): void {
    const favoriteCities = this.getFavoriteCities();
    const id = city.id.toString();
    if (favoriteCities[id]) {
      favoriteCities[id] = undefined;
    } else {
      favoriteCities[id] = city;
    }
    this.saveInLocalStore(favoriteCities);
  }

  getFavoriteCities(): Object {
    return this.getSavedCities();
  }

  isFavorite(city: City): boolean {
    return this.getFavoriteCities()[city.id.toString()];
  }

  private saveInLocalStore(favoriteCities:Object){
    localStorage.setItem(FavoriteCitiesService.LOCAL_STORAGE, JSON.stringify(favoriteCities));
  }

  private getSavedCities():Object{
    return JSON.parse(
      localStorage.getItem(FavoriteCitiesService.LOCAL_STORAGE) || '{}'
    );
  }
}

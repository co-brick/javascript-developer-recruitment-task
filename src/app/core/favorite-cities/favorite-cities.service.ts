import { Injectable } from '@angular/core';
import { City } from '../models/City';
import { Observable, BehaviorSubject } from 'rxjs';
import { convertStoredObjectToCity } from '../models/mappsers';

@Injectable({
  providedIn: 'root',
})
export class FavoriteCitiesService {
  private static LOCAL_STORAGE: string = 'favoriteCities';
  private favoriteCitiesSubj = new BehaviorSubject<City[]>(
    this.convertToArray(this.getFavoriteCities())
  );
  constructor() {}

  toggleCity(city: City): void {
    const favoriteCities = this.getFavoriteCities();
    const id = city.id.toString();
    if (favoriteCities[id]) {
      favoriteCities[id] = undefined;
      delete favoriteCities[id];
    } else {
      favoriteCities[id] = city;
    }
    this.saveInLocalStore(favoriteCities);
    this.favoriteCitiesSubj.next(this.convertToArray(favoriteCities));
  }

  getFavoriteCities(): Object {
    return this.getSavedCities();
  }

  isFavorite(city: City): boolean {
    return this.getFavoriteCities()[city.id.toString()];
  }

  favorites$(): Observable<City[]> {
    return this.favoriteCitiesSubj;
  }

  private convertToArray(data: Object): City[] {
    return Object.entries(data).map(([, value]) => convertStoredObjectToCity(value));
  }

  private saveInLocalStore(favoriteCities: Object) {
    localStorage.setItem(
      FavoriteCitiesService.LOCAL_STORAGE,
      JSON.stringify(favoriteCities)
    );
  }

  private getSavedCities(): Object {
    return JSON.parse(
      localStorage.getItem(FavoriteCitiesService.LOCAL_STORAGE) || '{}'
    );
  }
}

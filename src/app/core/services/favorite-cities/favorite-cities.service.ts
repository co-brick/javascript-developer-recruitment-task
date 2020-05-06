import { Injectable } from '@angular/core';
import { City } from '../../models/City';
import { Observable, BehaviorSubject } from 'rxjs';
import { convertStoredObjectToCity } from '../../models/mappsers';

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
    let favoriteCities = this.getFavoriteCities();
    const id = city.id.toString();
    const updatedFavorites = (() => {
      if (favoriteCities[id]) {
        return this.removeCity(city, favoriteCities);
      } else {
        return this.addCity(city, favoriteCities);
      }
    })();
    this.saveInLocalStore(updatedFavorites);
    this.favoriteCitiesSubj.next(this.convertToArray(updatedFavorites));
  }

  getFavoriteCities(): Object {
    return this.getSavedCities();
  }

  getFavoriteCitiesArr(): City[] {
    return this.convertToArray(this.getFavoriteCities());
  }

  isFavorite(city: City): boolean {
    return this.getFavoriteCities()[city.id.toString()];
  }

  favorites$(): Observable<City[]> {
    return this.favoriteCitiesSubj;
  }

  saveCities(cities: City[]) {
    let favoriteCities = this.getFavoriteCities();
    cities.forEach((city) => {
      favoriteCities = this.addCity(city, favoriteCities);
    });
    this.saveInLocalStore(favoriteCities);
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

  private saveInLocalStore(favoriteCities: Object) {
    localStorage.setItem(
      FavoriteCitiesService.LOCAL_STORAGE,
      JSON.stringify(favoriteCities)
    );
  }

  private getSavedCities(): Object {
    const rawData = localStorage.getItem(FavoriteCitiesService.LOCAL_STORAGE)
    if(!rawData || rawData === 'undefined'){
      return {}
    }
    return JSON.parse(
      rawData
    );
  }
}

import { Injectable } from '@angular/core';
import { City } from '../models/City';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  private convertApiResponse(apiResponseObject: Object): City {
    const main = apiResponseObject['main'];
    const weather = apiResponseObject['weather'][0];
    return {
      id: apiResponseObject['id'] as Number,
      name: apiResponseObject['name'] as string,
      basicWeather: {
        temperature: main['temp'] as Number,
        humidity: main['humidity'] as Number,
        shortDescription: weather['main'] as string,
        description: weather['description'] as string,
      },
    };
  }

  private convertToArray(data: Object): City[] {
    return Object.entries(data).map(([, value]) =>
      this.convertApiResponse(value)
    );
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

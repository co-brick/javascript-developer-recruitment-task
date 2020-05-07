import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStarageService {
  private static LOCAL_STORAGE_KEY: string = 'favoriteCities';
  constructor() {}

  saveFavouiteCities(favoriteCities: Object) {
    localStorage.setItem(
      LocalStarageService.LOCAL_STORAGE_KEY,
      JSON.stringify(favoriteCities)
    );
  }

  getFavouriteCities(): Object {
    const rawData = localStorage.getItem(LocalStarageService.LOCAL_STORAGE_KEY);
    if (!rawData || rawData === 'undefined') {
      return {};
    }
    return JSON.parse(rawData);
  }
}

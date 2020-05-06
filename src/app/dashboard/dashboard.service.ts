import { Injectable } from '@angular/core';
import { FavoriteCitiesService } from '../core/services/favorite-cities/favorite-cities.service';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { City } from '../core/models/City';

interface CityForm {
  sortByName: boolean | null;
  filterByQuery: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private formSubject = new BehaviorSubject<CityForm>({
    sortByName: null,
    filterByQuery: null,
  });
  constructor(private favoriteCitiesService: FavoriteCitiesService) {}

  sortAndFilter(cityForm: CityForm): void {
    this.formSubject.next(cityForm);
  }

  favoriteCities$(): Observable<City[]> {
    return combineLatest(
      this.favoriteCitiesService.favorites$(),
      this.formSubject,
      (cities: City[], form: CityForm) => this.filterAndSort(cities, form)
    );
  }

  private filterAndSort(cities: City[], form: CityForm): City[] {
    let resultCities = [...cities];
    if (form.filterByQuery) {
      resultCities = [
        ...resultCities.filter(
          (city) =>
            city.name.toLowerCase().match(form.filterByQuery.toLowerCase()) !==
            null
        ),
      ];
    }
    if (form.sortByName) {
      resultCities = [
        ...resultCities.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
      ];
    }
    return resultCities;
  }
}

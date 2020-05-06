import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, interval, timer, Subscription } from 'rxjs';

import { ApiService } from '../../core/services/api/api.service';
import { FormControl } from '@angular/forms';
import { debounce } from 'rxjs/operators';
import { LoaderService } from '../../core/services/loader/loader.service';
import { City } from '../../core/models/City';

@Component({
  selector: 'search-city',
  templateUrl: './search-city.page.html',
  styleUrls: ['./search-city.page.scss'],
})
export class SearchCityPage implements OnInit, OnDestroy {
  cities: City[] = [];
  cityNameValue = new FormControl();
  subscription: Subscription;
  constructor(
    private apiService: ApiService,
    public loaderService: LoaderService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  fetchCities(cityName: string) {
    this.apiService.findCities(cityName).subscribe((cities) => {
      this.cities = cities;
    });
  }
  ngOnInit(): void {
    this.subscription = this.cityNameValue.valueChanges
      .pipe(debounce(() => timer(600)))
      .subscribe((cityName) => {
        this.fetchCities(cityName);
      });
  }
}

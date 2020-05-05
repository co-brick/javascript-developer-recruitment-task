import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, interval, timer } from 'rxjs';

import { ApiService } from '../../core/api/api.service';
import { FormControl } from '@angular/forms';
import { debounce } from 'rxjs/operators';
import { LoaderService } from '../../core/loader/loader.service';
import { City } from '../../core/models/City';

@Component({
  selector: 'search-city',
  templateUrl: './search-city.page.html',
  styleUrls: ['./search-city.page.scss'],
})
export class SearchCityPage implements OnInit {
  cities: City[] = [];
  cityNameValue = new FormControl();
  constructor(
    private apiService: ApiService,
    public loaderService: LoaderService
  ) {}
  fetchCities(cityName: string) {
    this.apiService.findCities(cityName).subscribe((cities) => {
      this.cities = cities;
    });
  }
  ngOnInit(): void {
    this.cityNameValue.valueChanges
      .pipe(debounce(() => timer(600)))
      .subscribe((cityName) => {
        this.fetchCities(cityName);
      });
  }
}

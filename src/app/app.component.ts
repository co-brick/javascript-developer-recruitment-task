import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, interval, timer } from 'rxjs';

import { ApiService } from './core/api/api.service';
import { FormControl } from '@angular/forms';
import { debounce } from 'rxjs/operators';
import { LoaderService } from './core/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  cityNameValue = new FormControl();
  constructor(
    private apiService: ApiService,
    public loaderService: LoaderService
  ) {}
  fetchCities(cityName: string) {
    this.apiService.findCities(cityName).subscribe((result) => {
      console.log(result);
    });
  }
  ngOnInit(): void {
    this.cityNameValue.valueChanges
      .pipe(debounce(() => timer(600)))
      .subscribe((cityName) => {
        console.log(cityName);
        this.fetchCities(cityName);
      });
  }
}

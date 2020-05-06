import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api/api.service';
import { City } from 'src/app/core/models/City';
import { Forecast } from 'src/app/core/models/Weather';
import { Subscription } from 'rxjs';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit, OnDestroy {
  city: City | null = null;
  forecasts: Forecast[] = [];
  fetchCitySubscription: Subscription;
  fetchForecastSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}
  ngOnDestroy(): void {
    this.fetchCitySubscription.unsubscribe();
    this.fetchForecastSubscription.unsubscribe();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('cityId');
    this.apiService.fetchCityById(id).subscribe((city) => {
      this.city = city;
    });
    this.apiService.fetchForecastForCity(id).subscribe((forecasts) => {
      this.forecasts = forecasts.slice(0, 5);
    });
  }

  get currentWeather(): Forecast {
    return {
      ...this.city.basicWeather,
      ...this.city.extendedWeather,
      date: null,
    };
  }
}

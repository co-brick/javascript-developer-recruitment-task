import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api/api.service';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { City } from 'src/app/core/models/City';
import { Forecast } from 'src/app/core/models/Weather';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {
  city: City | null = null
  forecasts: Forecast[] = []
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('cityId');
    this.apiService.fetchCityById(id).subscribe((city) => {
      this.city = city;
    });
    this.apiService.fetchForecastForCity(id).subscribe((forecasts) => {
      this.forecasts = forecasts.slice(0,5);
    });
  }

  get currentWeather():Forecast {
    return {...this.city.basicWeather, ...this.city.extendedWeather, date: null}
  }
}

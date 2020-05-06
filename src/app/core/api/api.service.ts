import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { LoaderService } from '../loader/loader.service';
import { City } from '../models/City';
import {
  SearchCitiesResponse,
  CityWeatherDetailsResponse,
  ApiForecastResponse,
} from '../models/api';
import {
  convertApiCityResponse,
  convertCityWeatherResponseToDetails,
  convertApiForecastResponseToForecast,
} from '../models/mappsers';
import { Forecast } from '../models/Weather';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  callParams = {
    appId: environment.apiId,
    units: 'metric',
  };

  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  formatErrors = (error: any) => {
    this.loaderService.setIsLoading(false);
    return throwError(error.error);
  };

  fetchForecastForCity(id: string): Observable<Forecast[]> {
    this.loaderService.setIsLoading(true);
    return this.http
      .get<ApiForecastResponse>(`${environment.apiUrl}/forecast`, {
        reportProgress: true,
        params: {
          ...this.callParams,
          id,
        },
      })
      .pipe(
        catchError(this.formatErrors),
        map((response) =>
          response.list.map((apiForecast) =>
            convertApiForecastResponseToForecast(apiForecast)
          )
        ),
        tap((x) => this.loaderService.setIsLoading(false))
      );
  }

  fetchCityById(id: string): Observable<City> {
    this.loaderService.setIsLoading(true);
    return this.http
      .get<CityWeatherDetailsResponse>(`${environment.apiUrl}/weather`, {
        reportProgress: true,
        params: {
          ...this.callParams,
          id,
        },
      })
      .pipe(
        catchError(this.formatErrors),
        map((response) => convertCityWeatherResponseToDetails(response)),
        tap((x) => {
          this.loaderService.setIsLoading(false);
        })
      );
  }

  findCities(cityQury: string): Observable<City[]> {
    this.loaderService.setIsLoading(true);
    return this.http
      .get<SearchCitiesResponse>(`${environment.apiUrl}/find`, {
        reportProgress: true,
        params: {
          ...this.callParams,
          q: cityQury,
        },
      })
      .pipe(
        catchError((error: any) => {
          this.loaderService.setIsLoading(false);
          if (error.cod === 400) {
            return of({ list: [] } as SearchCitiesResponse);
          }
          return throwError(error.error);
        }),
        tap((_searchCities) => {
          this.loaderService.setIsLoading(false);
        }),
        map((searchCities) => searchCities.list)
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  callParams = {
    appId: environment.apiId,
    units: 'metric'
  }

  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  formatErrors = (error:any) => {
    this.loaderService.setIsLoading(false);
    return throwError(error.error);
  }

  findCities(cityQury: string): Observable<any> {
    this.loaderService.setIsLoading(true);
    return this.http
      .get(`${environment.apiUrl}/find`, {
        reportProgress: true,
        params: {
          ...this.callParams,
          q: cityQury
        },
      })
      .pipe(
        catchError(this.formatErrors),
        tap((_x) => {
          this.loaderService.setIsLoading(false);
        })
      );
  }
}

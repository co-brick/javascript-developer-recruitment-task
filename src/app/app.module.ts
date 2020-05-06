import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CityCardComponent } from './search/components/city-card/city-card.component';
import { CityListComponent } from './search/components/city-list/city-list.component';
import { CityWeatherCardComponent } from './dashboard/components/city-weather-card/city-weather-card.component';
import { DashboardPage } from './dashboard/page/dashboard.page';
import { SearchCityPage } from './search/page/search-city.page';
import { WeatherDetailsPage } from './weather-details/page/weather-details.page';
import { ForecastCardComponent } from './weather-details/components/forecast-card/forecast-card.component';
import { ParameterFieldComponent } from './weather-details/components/parameter-field/parameter-field.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CityCardComponent,
    CityListComponent,
    DashboardPage,
    CityWeatherCardComponent,
    SearchCityPage,
    WeatherDetailsPage,
    ForecastCardComponent,
    ParameterFieldComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

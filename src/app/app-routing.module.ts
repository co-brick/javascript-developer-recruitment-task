import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard/page/dashboard.page';
import { SearchCityPage } from './search/page/search-city.page';
import { WeatherDetailsPage } from './weather-details/page/weather-details.page';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPage },
  { path: 'search', component: SearchCityPage },
  { path: 'weather-details/:cityId', component: WeatherDetailsPage},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

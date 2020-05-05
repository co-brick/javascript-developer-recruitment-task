import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard/page/dashboard.page';
import { SearchCityPage } from './search/page/search-city.page';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPage },
  { path: 'search', component: SearchCityPage },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

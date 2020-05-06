import { Component, OnInit, OnDestroy } from '@angular/core';
import { City } from 'src/app/core/models/City';
import { DashboardService } from '../dashboard.service';
import { FormControl } from '@angular/forms';
import { combineLatest, zip, Subscription } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  favoriteCities: City[] = [];
  sortByName = new FormControl();
  query = new FormControl();
  formSubscription: Subscription;
  listSubscription: Subscription;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.updateFavorites();
    this.listSubscription = this.dashboardService
      .favoriteCities$()
      .subscribe((citiesList) => {
        this.favoriteCities = citiesList;
      });

    this.formSubscription = combineLatest(
      this.sortByName.valueChanges,
      this.query.valueChanges,
      (sortByName, query) => {
        return {
          filterByQuery: query !== '' ? query : null,
          sortByName,
        };
      }
    ).subscribe((form) => this.dashboardService.sortAndFilter(form));

    this.query.setValue('');
    this.sortByName.setValue(false);
  }

  ngOnDestroy(): void {
    this.listSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }
}

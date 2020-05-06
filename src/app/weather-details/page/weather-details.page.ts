import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('cityId');
    this.apiService.fetchCityById(id).subscribe((result) => {
      console.log(result);
    });
    this.apiService.fetchForecastForCity(id).subscribe((result) => {
      console.log(result);
    });
    console.log(id);
  }
}

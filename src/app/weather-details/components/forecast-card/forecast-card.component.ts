import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from 'src/app/core/models/Weather';

@Component({
  selector: 'forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent implements OnInit {
  @Input() forecast: Forecast;
  constructor() {}

  ngOnInit(): void {}

  get formattedWindSpeed() {
    return `${this.forecast.windSpeed} m/s`;
  }
  get formattedWindDegree() {
    return `${this.forecast.windDegree} °`;
  }
  get formattedTemperature() {
    return `${this.forecast.temperature} °C`;
  }
  get formattedHumidity() {
    return `${this.forecast.humidity} %`;
  }
  get formattedDescription() {
    return `${this.forecast.shortDescription} - ${this.forecast.description}`;
  }
  get formattedClouds() {
    return this.forecast.clouds && `${this.forecast.clouds} %`;
  }
  get formattedPressure() {
    return `${this.forecast.pressure} mhPa`;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/core/models/City';

@Component({
  selector: 'city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {
  @Input() city: City
  constructor() { }

  ngOnInit(): void {
  }

}

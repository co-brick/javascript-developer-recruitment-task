import { Component, OnInit, Inject, Input } from '@angular/core';
import { City } from 'src/app/core/models/City';

@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  @Input() cities: City[];
  constructor() {}

  ngOnInit(): void {}
}

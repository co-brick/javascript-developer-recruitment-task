import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { City } from 'src/app/core/models/City';
import { BasicWeather } from 'src/app/core/models/Weather';
import { FavoriteCitiesService } from 'src/app/core/services/favorite-cities/favorite-cities.service';

import { CityWeatherCardComponent } from './city-weather-card.component';

describe('CityWeatherCardComponent', () => {
  let component: CityWeatherCardComponent;
  let fixture: ComponentFixture<CityWeatherCardComponent>;
  let favoriteCitiesServiceSpy: jasmine.SpyObj<FavoriteCitiesService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityWeatherCardComponent],
      providers:[
        {provide: FavoriteCitiesService, useSpy: favoriteCitiesServiceSpy}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherCardComponent);
    component = fixture.componentInstance;
    component.city = <City>{
      id: 123,
      name: 'city name',
      basicWeather: <BasicWeather>{
        temperature: 20,
        humidity: 12,
        description: 'desc',
        shortDescription: 'short desc',
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { City } from 'src/app/core/models/City';
import { BasicWeather } from 'src/app/core/models/Weather';
import { FavoriteCitiesService } from 'src/app/core/services/favorite-cities/favorite-cities.service';

import { CityCardComponent } from './city-card.component';

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;
  let favoriteCitiesService: jasmine.SpyObj<FavoriteCitiesService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityCardComponent],
      providers: [
        { provide: FavoriteCitiesService, useSpy: favoriteCitiesService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent);
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

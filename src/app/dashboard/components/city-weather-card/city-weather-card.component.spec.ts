import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherCardComponent } from './city-weather-card.component';

describe('CityWeatherCardComponent', () => {
  let component: CityWeatherCardComponent;
  let fixture: ComponentFixture<CityWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

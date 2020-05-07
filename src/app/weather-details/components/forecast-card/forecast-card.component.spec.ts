import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCardComponent } from './forecast-card.component';

describe('ForecastCardComponent', () => {
  let component: ForecastCardComponent;
  let fixture: ComponentFixture<ForecastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCardComponent);
    component = fixture.componentInstance;
    component.forecast = {
      date: null,
      temperature: 20,
      humidity: 20,
      description: 'mostly windy',
      shortDescription: 'windy',
      pressure: 1023,
      windSpeed: 12,
      clouds: 12,
      windDegree: 120
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api/api.service';

import { WeatherDetailsPage } from './weather-details.page';

describe('WeatherDetailsPage', () => {
  let component: WeatherDetailsPage;
  let fixture: ComponentFixture<WeatherDetailsPage>;
  let activationRouterMock: jasmine.SpyObj<ActivatedRoute>;
  let apiServiceMock: jasmine.SpyObj<ApiService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDetailsPage],
      providers: [
        { provide: ActivatedRoute, useMock: activationRouterMock },
        { provide: ApiService, useMock: apiServiceMock },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

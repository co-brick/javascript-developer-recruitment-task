import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/core/services/api/api.service';

import { SearchCityPage } from './search-city.page';

describe('SearchCityPage', () => {
  let component: SearchCityPage;
  let fixture: ComponentFixture<SearchCityPage>;
  let apiService: jasmine.SpyObj<ApiService>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCityPage ],
      providers: [
        {provide: ApiService, useSpy:apiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCityPage } from './search-city.page';

describe('SearchCityComponent', () => {
  let component: SearchCityPage;
  let fixture: ComponentFixture<SearchCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCityPage ]
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

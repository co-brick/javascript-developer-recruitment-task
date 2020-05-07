import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardService } from '../dashboard.service';
import { DashboardPage } from './dashboard.page';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;
  let dashboardServiceSpy: jasmine.SpyObj<DashboardService>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPage],
      providers: [{ provide: DashboardService, useSpy: dashboardServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

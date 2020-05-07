import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let loaderComponentSpy: jasmine.SpyObj<LoaderService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ],
      providers: [
        { provide: LoaderService, useSpy: loaderComponentSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

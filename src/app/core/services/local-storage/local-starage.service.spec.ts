import { TestBed } from '@angular/core/testing';

import { LocalStarageService } from './local-starage.service';

describe('LocalStarageService', () => {
  let service: LocalStarageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStarageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

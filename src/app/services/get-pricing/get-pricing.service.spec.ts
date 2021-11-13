import { TestBed } from '@angular/core/testing';

import { GetPricingService } from './get-pricing.service';

describe('GetPricingService', () => {
  let service: GetPricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

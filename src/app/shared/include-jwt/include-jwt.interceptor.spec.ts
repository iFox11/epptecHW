import { TestBed } from '@angular/core/testing';

import { IncludeJwtInterceptor } from './include-jwt.interceptor';

describe('IncludeJwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IncludeJwtInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IncludeJwtInterceptor = TestBed.inject(IncludeJwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

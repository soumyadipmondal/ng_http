import { TestBed } from '@angular/core/testing';

import { HttpErrInterceptor } from './http-err.interceptor';

describe('HttpErrInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpErrInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpErrInterceptor = TestBed.inject(HttpErrInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

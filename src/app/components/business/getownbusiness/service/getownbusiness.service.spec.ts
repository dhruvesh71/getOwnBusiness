import { TestBed } from '@angular/core/testing';

import { GetownbusinessService } from './getownbusiness.service';

describe('GetownbusinessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetownbusinessService = TestBed.get(GetownbusinessService);
    expect(service).toBeTruthy();
  });
});

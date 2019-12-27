import { TestBed } from '@angular/core/testing';

import { SantoshInteriorService } from './santosh-interior.service';

describe('SantoshInteriorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SantoshInteriorService = TestBed.get(SantoshInteriorService);
    expect(service).toBeTruthy();
  });
});

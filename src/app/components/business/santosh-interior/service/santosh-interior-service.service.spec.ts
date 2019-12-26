import { TestBed } from '@angular/core/testing';

import { SantoshInteriorServiceService } from './santosh-interior-service.service';

describe('SantoshInteriorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SantoshInteriorServiceService = TestBed.get(SantoshInteriorServiceService);
    expect(service).toBeTruthy();
  });
});

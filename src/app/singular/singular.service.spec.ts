import { TestBed } from '@angular/core/testing';

import { SingularService } from './singular.service';

describe('SingularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingularService = TestBed.get(SingularService);
    expect(service).toBeTruthy();
  });
});

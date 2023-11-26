import { TestBed } from '@angular/core/testing';

import { GmpAnimationService } from './gmp-animation.service';

describe('GmpAnimationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpAnimationService = TestBed.get(GmpAnimationService);
    expect(service).toBeTruthy();
  });
});

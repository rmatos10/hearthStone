import { TestBed } from '@angular/core/testing';

import { CartasGuard } from './cartas.guard.service';

describe('CartasGuard', () => {
  let service: CartasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartasGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

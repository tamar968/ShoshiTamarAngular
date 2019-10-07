import { TestBed, async, inject } from '@angular/core/testing';

import { ShopsGuard } from './shops.guard';

describe('ShopsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopsGuard]
    });
  });

  it('should ...', inject([ShopsGuard], (guard: ShopsGuard) => {
    expect(guard).toBeTruthy();
  }));
});

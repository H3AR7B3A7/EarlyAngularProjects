import { TestBed } from '@angular/core/testing';

import { ProductResolverService } from './product-resolver.service';

describe('ProductResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductResolverService = TestBed.get(ProductResolverService);
    expect(service).toBeTruthy();
  });
});

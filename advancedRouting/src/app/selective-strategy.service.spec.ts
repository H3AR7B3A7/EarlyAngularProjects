import { TestBed } from '@angular/core/testing'

import { SelectiveStrategyService } from './selective-strategy.service'

describe('SelectiveStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: SelectiveStrategyService = TestBed.get(SelectiveStrategyService)
    expect(service).toBeTruthy()
  })
})

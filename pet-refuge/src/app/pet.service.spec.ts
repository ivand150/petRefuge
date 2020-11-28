import { TestBed } from '@angular/core/testing';

import { PetService } from './pet.service';

describe('PetService', () => {
  let service: PetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPets should return value from observable', () => {
    service.getPets().subscribe(value => {
      expect(value).toBe([]);
    })
  })
});

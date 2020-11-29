import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PetService } from './pet.service';

describe('PetService', () => {
  let service: PetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPets should return value from observable', async (done) => {
    service.getPets().subscribe(value => {
      expect(value).toBe([]);
    })
    done()
  })
});

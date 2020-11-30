import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PetService } from './pet.service';

describe('PetService', () => {
  let service: PetService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    });
    service = TestBed.inject(PetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', (done) => {
    httpClientSpy.get.and.returnValue(of([]));
    service.getPets().subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
      done();
    });
  });
});

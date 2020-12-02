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

  it('getPets should be called', (done) => {
    httpClientSpy.get.and.returnValue(of([]));
    service.getPets().subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
      done();
    });
  });

  it('getPet should be called', (done) => {
    const id: number = 2;
    httpClientSpy.get.and.returnValue(of([]));
    service.getPet(id).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
      done();
    });
  });

  it('getPets should be called', (done) => {
    const errorResponse = ({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue((errorResponse));
    service.getPets().subscribe(pets => fail('expected an error, not heroes'),
      error => expect(error.message).toContain('test 404 error'));
  });

  // it('getPet should be called', (done) => {
  //   const operation = '';
  //   const result: any = '';
  //   httpClientSpy.get.and.returnValue(of([]));
  //   service.handleError(operation, result)(() => {
  //     expect(httpClientSpy.get.calls.count()).toBe(1);
  //     done();
  //   });
  // });
});

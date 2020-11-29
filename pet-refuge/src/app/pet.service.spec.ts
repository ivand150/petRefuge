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

  it('getPets should return value from observable', () => {
    service.getPets().subscribe()

    spyOn(service, "getPets")
    expect(spyOn(service, "getPets")).toHaveBeenCalled()
    // expect(http.get)

    // const req: any = {
    //   clone: jasmine.createSpy('clone')
    // };

    // // const service: any = {
    // //   getPets: () => service,
    // //   pipe: () => service
    // // }

    // spyOn(service, 'getPets').and.callThrough()


  })

  it('getPets should return error value', () => {

    let observable = jasmine.createSpyObj('Observable', ["subscribe"])
    spyOn(service.http, "get").and.returnValue(observable)

    service.getPets()

    expect(service.http.get).toHaveBeenCalledWith(service.petsUrl);

  })

  it('should service.http.get have been called', () => {

    let observable = jasmine.createSpyObj('Observable', ["subscribe"])
    spyOn(service.http, "get").and.returnValue(observable)

    service.getPets()

    expect(service.http.get).toHaveBeenCalled()

  })
});

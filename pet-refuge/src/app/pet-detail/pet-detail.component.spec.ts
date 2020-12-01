import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PetDetailComponent } from './pet-detail.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { PetService } from '../pet.service';

describe('PetDetailComponent', () => {
  let service: PetService;
  let component: PetDetailComponent;
  let fixture: ComponentFixture<PetDetailComponent>;
  let getPetSpy: { get: jasmine.Spy };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      declarations: [PetDetailComponent, HeaderComponent],
      providers: [{ provide: component, useValue: getPetSpy }]
    })
      .compileComponents();
    service = TestBed.inject(PetService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get Pet', () => {
    spyOn(component, 'getPet');
    component.ngOnInit();
    expect(component.getPet).toHaveBeenCalled();
  });

  it('should call getPets and return pet', async () => {
    getPetSpy = jasmine.createSpyObj('component', ['getPet']);
    const id: number = 2;
    service.getPet(id).subscribe(() => {
      expect(getPetSpy.get.calls.count()).toBe(1);
    });
  });

  it('should call getPets and return pet', async () => {
    getPetSpy = jasmine.createSpyObj('component', ['getPet']);
    // getPetSpy.get.and.returnValue(of({}));
    const id: number = 2;
    service.getPet(id).subscribe(() => {
      expect(component.pet!.id).toBe(2);
    });
  });
});

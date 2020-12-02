// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { PetDetailComponent } from './pet-detail.component';
// import { HeaderComponent } from '../header/header.component';
// import { RouterModule } from '@angular/router';
// import { PetService } from '../pet.service';
// import { of } from 'rxjs';
// import { Pet } from '../pet';

// describe('PetDetailComponent', () => {
//   let component: PetDetailComponent;
//   let fixture: ComponentFixture<PetDetailComponent>;

//   const petServiceStub = {
//     getPet: of({} as Pet)
//   };

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, RouterModule.forRoot([])],
//       declarations: [PetDetailComponent, HeaderComponent],
//       providers: [{ provide: PetService, useValue: petServiceStub }]
//     })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PetDetailComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should call getPets and return pet', async () => {
//     // const spy = spyOn(petServiceStub, 'getPet');

//     component.getPet(2);

//     expect(spy).toHaveBeenCalled();
//   });
// });

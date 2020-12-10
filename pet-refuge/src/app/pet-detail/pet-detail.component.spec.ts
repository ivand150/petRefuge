import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

import { PetDetailComponent } from './pet-detail.component';

describe('PetDetailComponent', () => {
  let component: PetDetailComponent;
  let fixture: ComponentFixture<PetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule, AngularFireModule],
      declarations: [PetDetailComponent],
      providers: [AuthService, { provide: AngularFireAuth }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // const user = {
    //   uid: '1234',
    //   email: 'ivandobry@hotmail.es',
    //   photoURL: 'photo',
    //   displayName: 'Ivan',
    //   favourite: ['asdasd', 'asdasd']
    // };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

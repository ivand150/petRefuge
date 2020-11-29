import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PetDetailComponent } from './pet-detail.component';
import { HeaderComponent } from '../header/header.component';

describe('PetDetailComponent', () => {
  let component: PetDetailComponent;
  let fixture: ComponentFixture<PetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PetDetailComponent, HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render like button', () => {
    const fixture = TestBed.createComponent(PetDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.like__button').textContent).toContain('LIKE');
  });
});

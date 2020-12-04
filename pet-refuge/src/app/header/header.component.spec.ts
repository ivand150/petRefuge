import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title pet-refuge', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.name__header').textContent).toContain('PetRefuge');
  });

  it('should sideNavClick function be called', (done) => {
    spyOn(component, 'sideNavClick');
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const burguer = compiled.querySelector('.burguerButton');
    const sideNav = compiled.querySelector('.side__nav');
    burguer.click();
    expect(sideNav.style.display).toBe('block');
    done();
  });

  it('should sideNavClick function be called', (done) => {
    spyOn(component, 'sideNavClick');
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const burguer = compiled.querySelector('.burguerButton');
    const sideNav = compiled.querySelector('.side__nav');
    sideNav.style.display = 'block';
    burguer.click();
    expect(sideNav.style.display).toBe('none');
    done();
  });

  // it('should sideNavClick function be called', (done) => {
  //   const sidenavElement = document.querySelector('.side__nav');
  //   component.sideNavClick();
  //   expect(sidenavElement.style.display).toBe('none');
  //   done();
  // });
});

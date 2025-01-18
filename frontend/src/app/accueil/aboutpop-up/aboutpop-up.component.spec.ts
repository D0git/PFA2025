import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpopUpComponent } from './aboutpop-up.component';

describe('AboutpopUpComponent', () => {
  let component: AboutpopUpComponent;
  let fixture: ComponentFixture<AboutpopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutpopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutpopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

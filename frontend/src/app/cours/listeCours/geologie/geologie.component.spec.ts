import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeologieComponent } from './geologie.component';

describe('GeologieComponent', () => {
  let component: GeologieComponent;
  let fixture: ComponentFixture<GeologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeologieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

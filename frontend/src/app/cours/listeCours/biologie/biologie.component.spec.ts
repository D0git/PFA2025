import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologieComponent } from './biologie.component';

describe('BiologieComponent', () => {
  let component: BiologieComponent;
  let fixture: ComponentFixture<BiologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiologieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

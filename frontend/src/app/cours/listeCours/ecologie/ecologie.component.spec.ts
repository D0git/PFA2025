import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologieComponent } from './ecologie.component';

describe('EcologieComponent', () => {
  let component: EcologieComponent;
  let fixture: ComponentFixture<EcologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcologieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

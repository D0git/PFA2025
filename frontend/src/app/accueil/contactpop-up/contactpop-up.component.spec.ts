import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactpopUpComponent } from './contactpop-up.component';

describe('ContactpopUpComponent', () => {
  let component: ContactpopUpComponent;
  let fixture: ComponentFixture<ContactpopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactpopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactpopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

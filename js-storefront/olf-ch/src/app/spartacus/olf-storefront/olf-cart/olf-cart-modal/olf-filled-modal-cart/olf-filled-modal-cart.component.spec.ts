import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfFilledModalCartComponent } from './olf-filled-modal-cart.component';

describe('OlfFilledModalCartComponent', () => {
  let component: OlfFilledModalCartComponent;
  let fixture: ComponentFixture<OlfFilledModalCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfFilledModalCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfFilledModalCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

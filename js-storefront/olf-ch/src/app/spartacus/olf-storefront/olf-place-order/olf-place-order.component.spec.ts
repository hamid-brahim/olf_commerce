import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfPlaceOrderComponent } from './olf-place-order.component';

describe('OlfPlaceOrderComponent', () => {
  let component: OlfPlaceOrderComponent;
  let fixture: ComponentFixture<OlfPlaceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfPlaceOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

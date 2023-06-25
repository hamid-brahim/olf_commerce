import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlfCheckoutDeliveryAddressComponent } from './olf-checkout-delivery-address.component';

describe('OlfCheckoutDeliveryAddressComponent', () => {
  let component: OlfCheckoutDeliveryAddressComponent;
  let fixture: ComponentFixture<OlfCheckoutDeliveryAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlfCheckoutDeliveryAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlfCheckoutDeliveryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

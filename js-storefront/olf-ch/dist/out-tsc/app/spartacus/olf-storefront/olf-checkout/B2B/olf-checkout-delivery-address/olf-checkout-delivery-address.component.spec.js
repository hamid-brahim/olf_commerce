import { TestBed } from '@angular/core/testing';
import { OlfCheckoutDeliveryAddressComponent } from './olf-checkout-delivery-address.component';
describe('OlfCheckoutDeliveryAddressComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfCheckoutDeliveryAddressComponent]
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
//# sourceMappingURL=olf-checkout-delivery-address.component.spec.js.map
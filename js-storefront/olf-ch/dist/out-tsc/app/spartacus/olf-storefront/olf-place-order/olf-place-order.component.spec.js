import { TestBed } from '@angular/core/testing';
import { OlfPlaceOrderComponent } from './olf-place-order.component';
describe('OlfPlaceOrderComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfPlaceOrderComponent]
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
//# sourceMappingURL=olf-place-order.component.spec.js.map
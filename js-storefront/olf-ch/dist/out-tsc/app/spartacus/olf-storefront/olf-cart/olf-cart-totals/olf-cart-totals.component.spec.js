import { TestBed } from '@angular/core/testing';
import { OlfCartTotalsComponent } from './olf-cart-totals.component';
describe('OlfCartTotalsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfCartTotalsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfCartTotalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-cart-totals.component.spec.js.map
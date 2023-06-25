import { TestBed } from '@angular/core/testing';
import { OlfOrderSummaryComponent } from './olf-order-summary.component';
describe('OlfOrderSummaryComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfOrderSummaryComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfOrderSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-order-summary.component.spec.js.map
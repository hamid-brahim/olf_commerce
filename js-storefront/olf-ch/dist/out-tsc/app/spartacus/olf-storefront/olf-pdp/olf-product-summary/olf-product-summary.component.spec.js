import { TestBed } from '@angular/core/testing';
import { OlfProductSummaryComponent } from './olf-product-summary.component';
describe('OlfProductSummaryComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfProductSummaryComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfProductSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-product-summary.component.spec.js.map
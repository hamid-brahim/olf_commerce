import { TestBed } from '@angular/core/testing';
import { OlfCartDetailsComponent } from './olf-cart-details.component';
describe('OlfCartDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfCartDetailsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfCartDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-cart-details.component.spec.js.map
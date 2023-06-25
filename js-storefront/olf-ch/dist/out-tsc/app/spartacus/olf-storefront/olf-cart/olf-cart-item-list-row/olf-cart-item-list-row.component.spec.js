import { TestBed } from '@angular/core/testing';
import { OlfCartItemListRowComponent } from './olf-cart-item-list-row.component';
describe('OlfCartItemListRowComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfCartItemListRowComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfCartItemListRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-cart-item-list-row.component.spec.js.map
import { TestBed } from '@angular/core/testing';
import { OlfCartItemListComponent } from './olf-cart-item-list.component';
describe('OlfCartItemListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfCartItemListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfCartItemListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-cart-item-list.component.spec.js.map
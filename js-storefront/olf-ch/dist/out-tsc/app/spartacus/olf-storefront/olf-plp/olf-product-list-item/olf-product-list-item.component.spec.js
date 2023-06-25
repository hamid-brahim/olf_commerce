import { TestBed } from '@angular/core/testing';
import { OlfProductListItemComponent } from './olf-product-list-item.component';
describe('OlfProductListItemComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfProductListItemComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfProductListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-product-list-item.component.spec.js.map
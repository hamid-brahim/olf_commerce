import { TestBed } from '@angular/core/testing';
import { OlfProductReferencesComponent } from './olf-product-references.component';
describe('OlfProductReferencesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfProductReferencesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfProductReferencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-product-references.component.spec.js.map
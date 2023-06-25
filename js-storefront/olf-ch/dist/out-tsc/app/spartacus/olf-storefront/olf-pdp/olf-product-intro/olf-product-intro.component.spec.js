import { TestBed } from '@angular/core/testing';
import { OlfProductIntroComponent } from './olf-product-intro.component';
describe('OlfProductIntroComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfProductIntroComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfProductIntroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-product-intro.component.spec.js.map
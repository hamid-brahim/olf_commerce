import { TestBed } from '@angular/core/testing';
import { OlfFooterComponent } from './olf-footer.component';
describe('OlfFooterComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfFooterComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-footer.component.spec.js.map
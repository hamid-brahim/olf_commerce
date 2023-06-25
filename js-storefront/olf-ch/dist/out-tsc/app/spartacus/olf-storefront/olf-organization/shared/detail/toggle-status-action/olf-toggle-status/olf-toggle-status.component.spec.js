import { TestBed } from '@angular/core/testing';
import { OlfToggleStatusComponent } from './olf-toggle-status.component';
describe('OlfToggleStatusComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfToggleStatusComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfToggleStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-toggle-status.component.spec.js.map
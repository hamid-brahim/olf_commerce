import { TestBed } from '@angular/core/testing';
import { OlfUserDetailComponent } from './olf-user-detail.component';
describe('OlfUserDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfUserDetailComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfUserDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-user-detail.component.spec.js.map
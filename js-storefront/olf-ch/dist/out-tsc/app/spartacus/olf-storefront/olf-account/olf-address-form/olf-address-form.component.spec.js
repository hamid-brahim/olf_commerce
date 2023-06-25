import { TestBed } from '@angular/core/testing';
import { OlfAddressFormComponent } from './olf-address-form.component';
describe('OlfAddressFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfAddressFormComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfAddressFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-address-form.component.spec.js.map
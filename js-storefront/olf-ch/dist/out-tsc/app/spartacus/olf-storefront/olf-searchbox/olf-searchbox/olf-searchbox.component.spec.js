import { TestBed } from '@angular/core/testing';
import { OlfSearchboxComponent } from './olf-searchbox.component';
describe('OlfSearchboxComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfSearchboxComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfSearchboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-searchbox.component.spec.js.map
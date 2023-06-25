import { TestBed } from '@angular/core/testing';
import { OlfActiveFacetsComponent } from './olf-active-facets.component';
describe('OlfActiveFacetsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfActiveFacetsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfActiveFacetsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-active-facets.component.spec.js.map
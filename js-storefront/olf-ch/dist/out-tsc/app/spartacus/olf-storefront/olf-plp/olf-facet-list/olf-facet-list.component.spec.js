import { TestBed } from '@angular/core/testing';
import { OlfFacetListComponent } from './olf-facet-list.component';
describe('OlfFacetListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfFacetListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfFacetListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-facet-list.component.spec.js.map
import { TestBed } from '@angular/core/testing';
import { OlfHomepageSideTileComponent } from './olf-homepage-side-tile.component';
describe('OlfHomepageSideTileComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfHomepageSideTileComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfHomepageSideTileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-homepage-side-tile.component.spec.js.map
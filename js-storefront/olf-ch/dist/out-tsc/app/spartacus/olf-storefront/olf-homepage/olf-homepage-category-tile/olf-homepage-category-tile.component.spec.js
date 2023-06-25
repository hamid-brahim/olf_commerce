import { TestBed } from '@angular/core/testing';
import { OlfHomepageCategoryTileComponent } from './olf-homepage-category-tile.component';
describe('OlfHomepageCategoryTileComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfHomepageCategoryTileComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfHomepageCategoryTileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-homepage-category-tile.component.spec.js.map
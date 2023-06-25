import { TestBed } from '@angular/core/testing';
import { OlfHomepageMainTileComponent } from './olf-homepage-main-tile.component';
describe('OlfHomepageMainTileComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfHomepageMainTileComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfHomepageMainTileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-homepage-main-tile.component.spec.js.map
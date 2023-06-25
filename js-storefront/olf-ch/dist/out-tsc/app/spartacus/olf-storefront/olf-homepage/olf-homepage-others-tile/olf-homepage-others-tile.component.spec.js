import { TestBed } from '@angular/core/testing';
import { OlfHomepageOthersTileComponent } from './olf-homepage-others-tile.component';
describe('OlfHomepageOthersTileComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfHomepageOthersTileComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfHomepageOthersTileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-homepage-others-tile.component.spec.js.map
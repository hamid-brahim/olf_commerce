import { TestBed } from '@angular/core/testing';
import { OlfmodalSearchComponent } from './olf-modal-search.component';
describe('OlfmodalSearchComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfmodalSearchComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfmodalSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-modal-search.component.spec.js.map
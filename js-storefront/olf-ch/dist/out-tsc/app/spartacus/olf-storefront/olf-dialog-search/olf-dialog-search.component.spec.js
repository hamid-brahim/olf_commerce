import { TestBed } from '@angular/core/testing';
import { OlfDialogSearchComponent } from './olf-dialog-search.component';
describe('OlfDialogSearchComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OlfDialogSearchComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(OlfDialogSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=olf-dialog-search.component.spec.js.map
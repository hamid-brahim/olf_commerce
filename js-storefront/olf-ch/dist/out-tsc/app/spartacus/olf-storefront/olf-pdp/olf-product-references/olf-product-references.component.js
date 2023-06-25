import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductReferencesComponent } from '@spartacus/storefront';
import { of } from 'rxjs';
import { filter, map, tap, withLatestFrom, switchMap } from 'rxjs/operators';
let OlfProductReferencesComponent = class OlfProductReferencesComponent extends ProductReferencesComponent {
    constructor() {
        super(...arguments);
        this.items$ = this.productCode$.pipe(withLatestFrom(this.componentData$), tap(([productCode, data]) => this.productReferenceService.loadProductReferences(productCode, this.referenceType.toUpperCase())), switchMap(([productCode, data]) => this.getProductReferencesCustom(productCode, this.referenceType.toUpperCase())));
    }
    getProductReferencesCustom(code, referenceType) {
        return this.productReferenceService
            .getProductReferences(code, referenceType)
            .pipe(filter(Boolean), map((references) => references.map((reference) => of(reference.target))));
    }
};
__decorate([
    Input()
], OlfProductReferencesComponent.prototype, "referenceType", void 0);
OlfProductReferencesComponent = __decorate([
    Component({
        selector: 'app-olf-product-references',
        templateUrl: './olf-product-references.component.html',
        styleUrls: ['./olf-product-references.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], OlfProductReferencesComponent);
export { OlfProductReferencesComponent };
//# sourceMappingURL=olf-product-references.component.js.map
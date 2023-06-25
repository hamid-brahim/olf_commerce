import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
let OlfCategoriesRowComponent = class OlfCategoriesRowComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    selectCategory() {
        this.categoriesService.categorySelection.next();
    }
};
__decorate([
    Input()
], OlfCategoriesRowComponent.prototype, "parent", void 0);
OlfCategoriesRowComponent = __decorate([
    Component({
        selector: 'app-olf-categories-row',
        templateUrl: './olf-categories-row.component.html',
        styleUrls: ['./olf-categories-row.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OlfCategoriesRowComponent);
export { OlfCategoriesRowComponent };
//# sourceMappingURL=olf-categories-row.component.js.map
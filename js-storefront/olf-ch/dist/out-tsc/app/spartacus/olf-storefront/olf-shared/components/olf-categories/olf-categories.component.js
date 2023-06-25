import { __decorate } from "tslib";
import { Component, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
let OlfCategoriesComponent = class OlfCategoriesComponent {
    constructor(categorieService) {
        this.categorieService = categorieService;
        this.categorySelected = new EventEmitter();
        this.componentSubscription = new Subscription();
    }
    ngOnInit() {
        this.componentSubscription.add(this.categorieService.categorySelection.subscribe(() => this.categorySelected.emit()));
    }
    ngOnDestroy() {
        this.componentSubscription.unsubscribe();
    }
};
__decorate([
    Input()
], OlfCategoriesComponent.prototype, "categoriesData$", void 0);
__decorate([
    Input()
], OlfCategoriesComponent.prototype, "containerClass", void 0);
__decorate([
    Input()
], OlfCategoriesComponent.prototype, "categorySelected", void 0);
OlfCategoriesComponent = __decorate([
    Component({
        selector: 'app-olf-categories',
        templateUrl: './olf-categories.component.html',
        styleUrls: ['./olf-categories.component.scss']
    })
], OlfCategoriesComponent);
export { OlfCategoriesComponent };
//# sourceMappingURL=olf-categories.component.js.map
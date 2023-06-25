import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OlfCategoriesWrapperComponent = class OlfCategoriesWrapperComponent {
    constructor(cmsService, navigationService) {
        this.cmsService = cmsService;
        this.navigationService = navigationService;
        this.categoriesContainerClass = 'padding-left-20';
        this.categoriesData$ = this.navigationService.createNavigation(this.cmsService.getComponentData('OlfCategoryNavComponent'));
    }
};
OlfCategoriesWrapperComponent = __decorate([
    Component({
        selector: 'app-olf-categories-wrapper',
        templateUrl: './olf-categories-wrapper.component.html',
        styleUrls: ['./olf-categories-wrapper.component.scss']
    })
], OlfCategoriesWrapperComponent);
export { OlfCategoriesWrapperComponent };
//# sourceMappingURL=olf-categories-wrapper.component.js.map
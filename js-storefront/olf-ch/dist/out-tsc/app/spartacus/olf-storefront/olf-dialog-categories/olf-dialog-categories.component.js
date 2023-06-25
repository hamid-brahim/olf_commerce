import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { OlfCategoriesWrapperComponent } from '../olf-categories-wrapper/olf-categories-wrapper.component';
let OlfDialogCategoriesComponent = class OlfDialogCategoriesComponent extends OlfCategoriesWrapperComponent {
    constructor(cmsService, navigationService, launchDialogService) {
        super(cmsService, navigationService);
        this.launchDialogService = launchDialogService;
    }
    closeDialog() {
        this.launchDialogService.closeDialog('close');
    }
};
OlfDialogCategoriesComponent = __decorate([
    Component({
        selector: 'app-olf-dialog-categories',
        templateUrl: './olf-dialog-categories.component.html',
        styleUrls: ['./olf-dialog-categories.component.scss']
    })
], OlfDialogCategoriesComponent);
export { OlfDialogCategoriesComponent };
//# sourceMappingURL=olf-dialog-categories.component.js.map
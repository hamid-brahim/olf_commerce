import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule, NavigationModule } from '@spartacus/storefront';
import { OlfSharedModule } from '../olf-shared/olf-shared.module';
import { OlfDialogCategoriesComponent } from './olf-dialog-categories.component';
let OlfDialogCategoriesModule = class OlfDialogCategoriesModule {
};
OlfDialogCategoriesModule = __decorate([
    NgModule({
        declarations: [
            OlfDialogCategoriesComponent
        ],
        imports: [
            CommonModule,
            NavigationModule,
            IconModule,
            I18nModule,
            OlfSharedModule
        ],
        exports: [
            OlfDialogCategoriesComponent
        ]
    })
], OlfDialogCategoriesModule);
export { OlfDialogCategoriesModule };
//# sourceMappingURL=olf-dialog-categories.module.js.map
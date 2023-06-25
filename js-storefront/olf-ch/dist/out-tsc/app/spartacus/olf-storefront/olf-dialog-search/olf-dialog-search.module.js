import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';
import { OlfDialogSearchComponent } from './olf-dialog-search.component';
let OlfDialogSearchModule = class OlfDialogSearchModule {
};
OlfDialogSearchModule = __decorate([
    NgModule({
        declarations: [OlfDialogSearchComponent],
        imports: [
            CommonModule,
            RouterModule,
            IconModule,
            UrlModule,
            I18nModule,
            MediaModule
        ],
        exports: [
            OlfDialogSearchComponent
        ],
    })
], OlfDialogSearchModule);
export { OlfDialogSearchModule };
//# sourceMappingURL=olf-dialog-search.module.js.map
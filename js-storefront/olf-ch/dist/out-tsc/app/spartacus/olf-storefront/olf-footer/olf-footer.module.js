import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfFooterComponent } from './olf-footer.component';
import { ConfigModule, I18nModule } from "@spartacus/core";
import { footerCmsConfig } from "./config/footer.config";
import { IconModule, NavigationModule } from "@spartacus/storefront";
let OlfFooterModule = class OlfFooterModule {
};
OlfFooterModule = __decorate([
    NgModule({
        declarations: [
            OlfFooterComponent
        ],
        imports: [
            CommonModule, ConfigModule.withConfig(footerCmsConfig), IconModule, NavigationModule, I18nModule
        ],
        exports: [
            OlfFooterComponent
        ]
    })
], OlfFooterModule);
export { OlfFooterModule };
//# sourceMappingURL=olf-footer.module.js.map
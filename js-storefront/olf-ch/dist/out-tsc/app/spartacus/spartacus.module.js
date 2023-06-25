import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BaseStorefrontModule } from "@spartacus/storefront";
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';
let SpartacusModule = class SpartacusModule {
};
SpartacusModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            SpartacusFeaturesModule,
            SpartacusConfigurationModule,
            BaseStorefrontModule
        ],
        exports: [BaseStorefrontModule]
    })
], SpartacusModule);
export { SpartacusModule };
//# sourceMappingURL=spartacus.module.js.map
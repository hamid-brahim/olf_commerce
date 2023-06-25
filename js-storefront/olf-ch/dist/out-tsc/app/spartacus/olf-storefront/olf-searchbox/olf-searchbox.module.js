import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfSearchboxComponent } from './olf-searchbox/olf-searchbox.component';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { IconModule, SearchBoxModule } from '@spartacus/storefront';
let OlfSearchboxModule = class OlfSearchboxModule {
};
OlfSearchboxModule = __decorate([
    NgModule({
        declarations: [
            OlfSearchboxComponent
        ],
        imports: [
            CommonModule,
            SearchBoxModule,
            IconModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    SearchBoxComponent: {
                        component: OlfSearchboxComponent
                    }
                }
            }),
            I18nModule,
        ],
        exports: [
            OlfSearchboxComponent
        ]
    })
], OlfSearchboxModule);
export { OlfSearchboxModule };
//# sourceMappingURL=olf-searchbox.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { SmartEditRootModule, SMART_EDIT_FEATURE } from "@spartacus/smartedit/root";
let SmartEditFeatureModule = class SmartEditFeatureModule {
};
SmartEditFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            SmartEditRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [SMART_EDIT_FEATURE]: {
                        module: () => import('@spartacus/smartedit').then((m) => m.SmartEditModule),
                    },
                }
            }),
            provideConfig({
                smartEdit: {
                    allowOrigin: 'localhost:9002, *.*.model-t.cc.commerce.ondemand.com:443',
                },
            })
        ]
    })
], SmartEditFeatureModule);
export { SmartEditFeatureModule };
//# sourceMappingURL=smart-edit-feature.module.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { unitOrderTranslationChunksConfig, unitOrderTranslations } from "@spartacus/organization/unit-order/assets";
import { ORGANIZATION_UNIT_ORDER_FEATURE, UnitOrderRootModule } from "@spartacus/organization/unit-order/root";
let OrganizationUnitOrderFeatureModule = class OrganizationUnitOrderFeatureModule {
};
OrganizationUnitOrderFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            UnitOrderRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [ORGANIZATION_UNIT_ORDER_FEATURE]: {
                        module: () => import('@spartacus/organization/unit-order').then((m) => m.UnitOrderModule),
                    },
                }
            }),
            provideConfig({
                i18n: {
                    resources: unitOrderTranslations,
                    chunks: unitOrderTranslationChunksConfig,
                },
            })
        ]
    })
], OrganizationUnitOrderFeatureModule);
export { OrganizationUnitOrderFeatureModule };
//# sourceMappingURL=organization-unit-order-feature.module.js.map
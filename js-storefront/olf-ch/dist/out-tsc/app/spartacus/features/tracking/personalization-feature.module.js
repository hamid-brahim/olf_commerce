import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { PersonalizationRootModule, PERSONALIZATION_FEATURE } from "@spartacus/tracking/personalization/root";
let PersonalizationFeatureModule = class PersonalizationFeatureModule {
};
PersonalizationFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            PersonalizationRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [PERSONALIZATION_FEATURE]: {
                        module: () => import('@spartacus/tracking/personalization').then((m) => m.PersonalizationModule),
                    },
                }
            })]
    })
], PersonalizationFeatureModule);
export { PersonalizationFeatureModule };
//# sourceMappingURL=personalization-feature.module.js.map
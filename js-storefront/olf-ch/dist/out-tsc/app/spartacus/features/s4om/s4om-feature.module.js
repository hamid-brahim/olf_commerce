import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { s4omTranslationChunksConfig, s4omTranslations } from "@spartacus/s4om/assets";
import { S4omRootModule, S4OM_FEATURE } from "@spartacus/s4om/root";
let S4omFeatureModule = class S4omFeatureModule {
};
S4omFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            S4omRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [S4OM_FEATURE]: {
                        module: () => import('@spartacus/s4om').then((m) => m.S4omModule),
                    },
                }
            }),
            provideConfig({
                i18n: {
                    resources: s4omTranslations,
                    chunks: s4omTranslationChunksConfig,
                },
            })
        ]
    })
], S4omFeatureModule);
export { S4omFeatureModule };
//# sourceMappingURL=s4om-feature.module.js.map
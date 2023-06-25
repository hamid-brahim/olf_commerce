import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { AdministrationRootModule, ORGANIZATION_ADMINISTRATION_FEATURE } from "@spartacus/organization/administration/root";
let OrganizationAdministrationFeatureModule = class OrganizationAdministrationFeatureModule {
};
OrganizationAdministrationFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            AdministrationRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [ORGANIZATION_ADMINISTRATION_FEATURE]: {
                        module: () => import('@spartacus/organization/administration').then((m) => m.AdministrationModule),
                    },
                }
            }),
            // provideConfig(<I18nConfig>{
            //   i18n: {
            //     resources: organizationTranslations,
            //     chunks: organizationTranslationChunksConfig,
            //   },
            // })
        ]
    })
], OrganizationAdministrationFeatureModule);
export { OrganizationAdministrationFeatureModule };
//# sourceMappingURL=organization-administration-feature.module.js.map
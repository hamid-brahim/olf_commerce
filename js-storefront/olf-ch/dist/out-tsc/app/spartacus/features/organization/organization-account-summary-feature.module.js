import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { accountSummaryTranslationChunksConfig, accountSummaryTranslations } from "@spartacus/organization/account-summary/assets";
import { AccountSummaryRootModule, ORGANIZATION_ACCOUNT_SUMMARY_FEATURE } from "@spartacus/organization/account-summary/root";
let OrganizationAccountSummaryFeatureModule = class OrganizationAccountSummaryFeatureModule {
};
OrganizationAccountSummaryFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            AccountSummaryRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [ORGANIZATION_ACCOUNT_SUMMARY_FEATURE]: {
                        module: () => import('@spartacus/organization/account-summary').then((m) => m.AccountSummaryModule),
                    },
                }
            }),
            provideConfig({
                i18n: {
                    resources: accountSummaryTranslations,
                    chunks: accountSummaryTranslationChunksConfig,
                },
            })
        ]
    })
], OrganizationAccountSummaryFeatureModule);
export { OrganizationAccountSummaryFeatureModule };
//# sourceMappingURL=organization-account-summary-feature.module.js.map
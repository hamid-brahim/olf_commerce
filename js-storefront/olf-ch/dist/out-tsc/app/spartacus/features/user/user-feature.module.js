import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { userAccountTranslationChunksConfig, userAccountTranslations } from "@spartacus/user/account/assets";
import { UserAccountRootModule, USER_ACCOUNT_FEATURE } from "@spartacus/user/account/root";
import { userProfileTranslationChunksConfig, userProfileTranslations } from "@spartacus/user/profile/assets";
import { UserProfileRootModule, USER_PROFILE_FEATURE } from "@spartacus/user/profile/root";
let UserFeatureModule = class UserFeatureModule {
};
UserFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            UserAccountRootModule,
            UserProfileRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [USER_ACCOUNT_FEATURE]: {
                        module: () => import('@spartacus/user/account').then((m) => m.UserAccountModule),
                    },
                }
            }),
            provideConfig({
                i18n: {
                    resources: userAccountTranslations,
                    chunks: userAccountTranslationChunksConfig,
                },
            }),
            provideConfig({
                featureModules: {
                    [USER_PROFILE_FEATURE]: {
                        module: () => import('@spartacus/user/profile').then((m) => m.UserProfileModule),
                    },
                }
            }),
            provideConfig({
                i18n: {
                    resources: userProfileTranslations,
                    chunks: userProfileTranslationChunksConfig,
                },
            })
        ]
    })
], UserFeatureModule);
export { UserFeatureModule };
//# sourceMappingURL=user-feature.module.js.map
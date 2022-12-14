import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from "@spartacus/core";
import { userAccountTranslationChunksConfig, userAccountTranslations } from "@spartacus/user/account/assets";
import { UserAccountRootModule, USER_ACCOUNT_FEATURE } from "@spartacus/user/account/root";
import { userProfileTranslationChunksConfig, userProfileTranslations } from "@spartacus/user/profile/assets";
import { UserProfileRootModule, USER_PROFILE_FEATURE } from "@spartacus/user/profile/root";
import {OlfLoginComponent} from "../../olf/olf-login/olf-login/olf-login.component";

@NgModule({
  declarations: [],
  imports: [
    UserAccountRootModule,
    UserProfileRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      [USER_ACCOUNT_FEATURE]: {
        module: () =>
          import('@spartacus/user/account').then((m) => m.UserAccountModule),
      },
    },
    cmsComponents: {
      ReturningCustomerLoginComponent: {
        component:OlfLoginComponent,
      }
    }
  }),

  provideConfig(<CmsConfig>{
    featureModules: {
      [USER_PROFILE_FEATURE]: {
        module: () =>
          import('@spartacus/user/profile').then((m) => m.UserProfileModule),
      },
    }
  }),

  ]
})
export class UserFeatureModule { }

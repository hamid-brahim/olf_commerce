import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from "@spartacus/core";

import { B2B_USER_NORMALIZER } from "@spartacus/organization/administration/core";
import {
  AdministrationRootModule,
  ORGANIZATION_ADMINISTRATION_FEATURE
} from "@spartacus/organization/administration/root";
import { OlfOccB2bUserNormalizer } from '../../olf-storefront/occ/converters/olf-occ-b2b-user-normalizer';



@NgModule({
  declarations: [],
  imports: [
    AdministrationRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      [ORGANIZATION_ADMINISTRATION_FEATURE]: {
        module: () =>
          import('@spartacus/organization/administration').then((m) => m.AdministrationModule),
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
export class OrganizationAdministrationFeatureModule { }

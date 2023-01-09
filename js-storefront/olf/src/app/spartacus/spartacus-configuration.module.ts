import { NgModule } from '@angular/core';
import { translationChunksConfig } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
// TODO:Spartacus - // TODO:Spartacus - Variable defaultB2bCheckoutConfig has been removed and is no longer part of the public API. Use 'defaultB2BCheckoutConfig' instead (imported from '@spartacus/checkout/b2b/root')
import { defaultB2bOccConfig } from '@spartacus/setup';
import {
  defaultCmsContentProviders,
  IconConfig,
  IconResourceType,
  layoutConfig,
  mediaConfig
} from "@spartacus/storefront";
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: environment.occBaseUrl
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      urlParameters: ['baseSite', 'language', 'currency'],
      baseSite: ['olf'],
      language: ['fr', 'en'],
      currency: ['EUR', 'CHF'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      backend: {
        loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
      },
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '5.0'
    }
  }),
  provideConfig({
    icon: {
      symbols: {
        CART: 'cart',
        HOME: 'home',
        MENU: 'menu',
        USER: 'account'
      },
      resources: [
        {
          type: IconResourceType.SVG,
          url: './assets/icons-sheet.svg',
          types: ['CART', 'HOME', 'MENU', 'USER'],
        },
        {
          type: IconResourceType.LINK,
          url: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        },
      ],
    },

    } as IconConfig),

    provideConfig(defaultB2bOccConfig)]

})
export class SpartacusConfigurationModule { }

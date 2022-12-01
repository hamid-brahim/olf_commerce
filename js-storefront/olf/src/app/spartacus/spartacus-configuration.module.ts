import { NgModule } from '@angular/core';
import { translationChunksConfig } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultB2bCheckoutConfig, defaultB2bOccConfig } from '@spartacus/setup';
import {
  defaultCmsContentProviders,
  IconConfig,
  IconResourceType,
  layoutConfig,
  mediaConfig
} from "@spartacus/storefront";
import { environment } from 'src/environments/environment.prod';


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
      level: '4.3'
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

    provideConfig(defaultB2bOccConfig), provideConfig(defaultB2bCheckoutConfig)]

})
export class SpartacusConfigurationModule { }

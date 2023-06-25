import { NgModule } from '@angular/core';
import { translationChunksConfig } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultB2bOccConfig } from "@spartacus/setup";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";
import { environment } from 'src/environments/environment';
import { olfLayoutConfig } from './layout.config';
import { olfAuthConfig } from './olf-storefront/auth/olfAuthConfig';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    provideConfig(layoutConfig), provideConfig(olfLayoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: environment.occBaseUrl,
          endpoints: {
            product:
              'products/${productCode}?fields=FULL',
            productSearch:
              'products/search?fields=products(FULL),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery'
          }
        }
      },
    }), provideConfig(<SiteContextConfig>{
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['cangubike-spa'],
        currency: ['EUR'],
        language: ['fr', 'en', 'de'],
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
        level: '5.2'
      }
    }),
    provideConfig(defaultB2bOccConfig)]

})
export class SpartacusConfigurationModule { }

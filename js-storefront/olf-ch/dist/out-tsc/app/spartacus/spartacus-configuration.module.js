import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { translationChunksConfig } from "@spartacus/assets";
import { provideConfig } from "@spartacus/core";
import { defaultB2bOccConfig } from "@spartacus/setup";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";
import { environment } from 'src/environments/environment';
import { olfLayoutConfig } from './layout.config';
import { olfAuthConfig } from './olf-storefront/auth/olfAuthConfig';
let SpartacusConfigurationModule = class SpartacusConfigurationModule {
};
SpartacusConfigurationModule = __decorate([
    NgModule({
        declarations: [],
        imports: [],
        providers: [
            provideConfig(layoutConfig), provideConfig(olfLayoutConfig), provideConfig(olfAuthConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig({
                backend: {
                    occ: {
                        baseUrl: environment.occBaseUrl,
                        endpoints: {
                            product: 'products/${productCode}?fields=FULL',
                            productSearch: 'products/search?fields=products(FULL),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery'
                        }
                    }
                },
            }), provideConfig({
                context: {
                    urlParameters: ['baseSite', 'language', 'currency'],
                    baseSite: ['olf-ch'],
                    currency: ['CHF', 'EUR'],
                    language: ['fr', 'en', 'de'],
                },
            }), provideConfig({
                i18n: {
                    backend: {
                        loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
                    },
                    chunks: translationChunksConfig,
                    fallbackLang: 'en'
                },
            }), provideConfig({
                features: {
                    level: '5.2'
                }
            }),
            provideConfig(defaultB2bOccConfig)
        ]
    })
], SpartacusConfigurationModule);
export { SpartacusConfigurationModule };
//# sourceMappingURL=spartacus-configuration.module.js.map
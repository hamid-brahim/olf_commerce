import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UrlModule } from '@spartacus/core';
import { AppRoutingModule, GenericLinkModule, IconModule, NavigationModule, OutletModule, PageSlotModule, } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import localeDe from '@angular/common/locales/de';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { OlfStorefrontModule } from './spartacus/olf-storefront/olf-storefront.module';
registerLocaleData(localeDe);
registerLocaleData(localeFr);
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        imports: [
            BrowserModule,
            HttpClientModule,
            AppRoutingModule,
            StoreModule.forRoot({}),
            EffectsModule.forRoot([]),
            SpartacusModule,
            OlfStorefrontModule,
            IconModule,
            OutletModule,
            GenericLinkModule,
            UrlModule,
            NavigationModule,
            PageSlotModule
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
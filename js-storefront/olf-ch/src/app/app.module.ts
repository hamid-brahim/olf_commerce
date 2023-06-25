import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideConfig, UrlModule } from '@spartacus/core';
import {
  AppRoutingModule,
  GenericLinkModule,
  IconModule,
  NavigationModule,
  OutletModule,
  PageSlotModule,
} from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { OlfHomepageModule } from './spartacus/olf-storefront/olf-homepage/olf-homepage.module';
import { OlfPdpModule } from './spartacus/olf-storefront/olf-pdp/olf-pdp.module';
import { OlfSearchboxModule } from './spartacus/olf-storefront/olf-searchbox/olf-searchbox.module';
import { SpartacusModule } from './spartacus/spartacus.module';
import { OlfPlpModule } from './spartacus/olf-storefront/olf-plp/olf-plp.module';
import localeDe from '@angular/common/locales/de';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { OlfStorefrontModule } from './spartacus/olf-storefront/olf-storefront.module';

registerLocaleData(localeDe);
registerLocaleData(localeFr);

@NgModule({
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
export class AppModule {}

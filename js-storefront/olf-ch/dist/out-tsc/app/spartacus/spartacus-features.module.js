import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CostCenterOccModule, ExternalRoutesModule, ProductModule, ProductOccModule, UserModule, UserOccModule } from "@spartacus/core";
import { AddressBookModule, AnonymousConsentManagementBannerModule, AnonymousConsentsDialogModule, BannerCarouselModule, BannerModule, BreadcrumbModule, CategoryNavigationModule, CmsParagraphModule, ConsentManagementModule, FooterNavigationModule, HamburgerMenuModule, HomePageEventModule, LinkModule, LoginRouteModule, LogoutModule, MyCouponsModule, MyInterestsModule, NavigationEventModule, NavigationModule, NotificationPreferenceModule, PageTitleModule, PaymentMethodsModule, ProductCarouselModule, ProductDetailsPageModule, ProductFacetNavigationModule, ProductImagesModule, ProductIntroModule, ProductListingPageModule, ProductListModule, ProductPageEventModule, ProductReferencesModule, ProductSummaryModule, ProductTabsModule, ScrollToTopModule, SearchBoxModule, SiteContextSelectorModule, StockNotificationModule, TabParagraphContainerModule } from "@spartacus/storefront";
import { UserFeatureModule } from './features/user/user-feature.module';
import { CartBaseFeatureModule } from './features/cart/cart-base-feature.module';
import { CartSavedCartFeatureModule } from './features/cart/cart-saved-cart-feature.module';
import { CartQuickOrderFeatureModule } from './features/cart/cart-quick-order-feature.module';
import { OrderFeatureModule } from './features/order/order-feature.module';
import { CheckoutFeatureModule } from './features/checkout/checkout-feature.module';
import { PersonalizationFeatureModule } from './features/tracking/personalization-feature.module';
import { OrganizationAdministrationFeatureModule } from './features/organization/organization-administration-feature.module';
import { OrganizationAccountSummaryFeatureModule } from './features/organization/organization-account-summary-feature.module';
import { OrganizationUnitOrderFeatureModule } from './features/organization/organization-unit-order-feature.module';
import { S4omFeatureModule } from './features/s4om/s4om-feature.module';
import { SmartEditFeatureModule } from './features/smartedit/smart-edit-feature.module';
import { ProductImageZoomFeatureModule } from './features/product/product-image-zoom-feature.module';
import { OlfFooterModule } from "./olf-storefront/olf-footer/olf-footer.module";
let SpartacusFeaturesModule = class SpartacusFeaturesModule {
};
SpartacusFeaturesModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            AuthModule.forRoot(),
            LogoutModule,
            LoginRouteModule,
            HamburgerMenuModule,
            SiteContextSelectorModule,
            LinkModule,
            BannerModule,
            CmsParagraphModule,
            TabParagraphContainerModule,
            BannerCarouselModule,
            CategoryNavigationModule,
            NavigationModule,
            FooterNavigationModule,
            BreadcrumbModule,
            ScrollToTopModule,
            PageTitleModule,
            UserModule,
            UserOccModule,
            AddressBookModule,
            PaymentMethodsModule,
            NotificationPreferenceModule,
            MyInterestsModule,
            StockNotificationModule,
            ConsentManagementModule,
            MyCouponsModule,
            AnonymousConsentsModule.forRoot(),
            AnonymousConsentsDialogModule,
            AnonymousConsentManagementBannerModule,
            ProductModule.forRoot(),
            ProductOccModule,
            ProductDetailsPageModule,
            ProductListingPageModule,
            ProductListModule,
            SearchBoxModule,
            ProductFacetNavigationModule,
            ProductTabsModule,
            ProductCarouselModule,
            ProductReferencesModule,
            ProductImagesModule,
            ProductSummaryModule,
            ProductIntroModule,
            CostCenterOccModule,
            NavigationEventModule,
            HomePageEventModule,
            ProductPageEventModule,
            ExternalRoutesModule.forRoot(),
            UserFeatureModule,
            CartBaseFeatureModule,
            CartSavedCartFeatureModule,
            CartQuickOrderFeatureModule,
            OrderFeatureModule,
            CheckoutFeatureModule,
            PersonalizationFeatureModule,
            OrganizationAdministrationFeatureModule,
            OrganizationAccountSummaryFeatureModule,
            OrganizationUnitOrderFeatureModule,
            S4omFeatureModule,
            SmartEditFeatureModule,
            ProductImageZoomFeatureModule,
            OlfFooterModule
        ]
    })
], SpartacusFeaturesModule);
export { SpartacusFeaturesModule };
//# sourceMappingURL=spartacus-features.module.js.map
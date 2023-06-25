import { NgModule } from '@angular/core';
import { CartPageEventModule } from "@spartacus/cart/base/core";
import { WishListModule } from "@spartacus/cart/wish-list";
import { CartBaseFeatureModule } from './features/cart/cart-base-feature.module';
// TODO:Spartacus - // TODO:Spartacus - Class CartModule has been removed and is no longer part of the public API. The cart base feature is now extracted to a lazy loadable library @spartacus/cart/base.  See the release documentation for more information.  While it's not identical, the new module 'CartBaseCoreModule' in '@spartacus/cart/base/core' is the closest equivalent in the new cart library.
// TODO:Spartacus - // TODO:Spartacus - Class CartOccModule has been removed and is no longer part of the public API. The cart base feature is now extracted to a lazy loadable library @spartacus/cart/base.  See the release documentation for more information.  While it's not identical, the new module 'CartBaseOccModule' in '@spartacus/cart/base/occ' is the closest equivalent in the new cart library.
// TODO:Spartacus - // TODO:Spartacus - Class UserOccTransitional_4_2_Module has been removed and is no longer part of the public API. Use UserOccModule instead.
// TODO:Spartacus - // TODO:Spartacus - Class UserTransitional_4_2_Module has been removed and is no longer part of the public API. Use UserModule instead.
import { CartBaseCoreModule } from "@spartacus/cart/base/core";
import { CartBaseOccModule } from "@spartacus/cart/base/occ";
import { AnonymousConsentsModule, AuthModule, CostCenterOccModule, ExternalRoutesModule, ProductModule, ProductOccModule, UserModule, UserOccModule } from "@spartacus/core";
import { OrderOccModule } from "@spartacus/order/occ";
// TODO:Spartacus - // TODO:Spartacus - Class CartComponentModule has been removed and is no longer part of the public API. The cart base feature is now extracted to a lazy loadable library @spartacus/cart/base.  See the release documentation for more information.
import { AddressBookModule, AnonymousConsentManagementBannerModule, AnonymousConsentsDialogModule, BannerCarouselModule, BannerModule, BreadcrumbModule, CategoryNavigationModule, CmsParagraphModule, ConsentManagementModule, FooterNavigationModule, HamburgerMenuModule, HomePageEventModule, LinkModule, LoginRouteModule, LogoutModule, MyCouponsModule, MyInterestsModule, NavigationEventModule, NavigationModule, NotificationPreferenceModule, PaymentMethodsModule, ProductCarouselModule, ProductDetailsPageModule, ProductFacetNavigationModule, ProductImagesModule, ProductIntroModule, ProductListingPageModule, ProductListModule, ProductPageEventModule, ProductReferencesModule, ProductSummaryModule, ProductTabsModule, SearchBoxModule, SiteContextSelectorModule, StockNotificationModule, TabParagraphContainerModule } from "@spartacus/storefront";
import { AsmFeatureModule } from './features/asm/asm-feature.module';
import { CartImportExportFeatureModule } from './features/cart/cart-import-export-feature.module';
import { CartQuickOrderFeatureModule } from './features/cart/cart-quick-order-feature.module';
import { CartSavedCartFeatureModule } from './features/cart/cart-saved-cart-feature.module';
import { CheckoutFeatureModule } from './features/checkout/checkout-feature.module';
import { OrderFeatureModule } from './features/order/order-feature.module';
import { OrganizationAdministrationFeatureModule } from './features/organization/organization-administration-feature.module';
import { ProductBulkPricingFeatureModule } from './features/product/product-bulk-pricing-feature.module';
import { ProductImageZoomFeatureModule } from './features/product/product-image-zoom-feature.module';
import { ProductVariantsFeatureModule } from './features/product/product-variants-feature.module';
import { SmartEditFeatureModule } from './features/smartedit/smart-edit-feature.module';
import { StoreFinderFeatureModule } from './features/storefinder/store-finder-feature.module';
import { PersonalizationFeatureModule } from './features/tracking/personalization-feature.module';
import { UserFeatureModule } from './features/user/user-feature.module';
import { OlfModule } from './olf/olf.module';

@NgModule({
  declarations: [],
  imports: [
    // Auth Core
    AuthModule.forRoot(),
    LogoutModule,
    LoginRouteModule,
    // Basic Cms Components
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
    // User Core,
    UserOccModule,
    UserModule,
    // User UI,
    AddressBookModule,
    PaymentMethodsModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    StockNotificationModule,
    ConsentManagementModule,
    MyCouponsModule,
    // Anonymous Consents Core,
    AnonymousConsentsModule.forRoot(),
    // Anonymous Consents UI,
    AnonymousConsentsDialogModule,
    AnonymousConsentManagementBannerModule,
    // Product Core,
    ProductModule.forRoot(),
    ProductOccModule,
    // Product UI,
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
    // Cart Core,
    CartBaseCoreModule,
   CartBaseOccModule,
    // Cart UI,
    //WishListModule,
    CostCenterOccModule,
    // Order,
    OrderOccModule,
    // Page Events,
    NavigationEventModule,
    HomePageEventModule,
    CartPageEventModule,
    ProductPageEventModule,
    // External routes,
    ExternalRoutesModule.forRoot(),
    UserFeatureModule,
    PersonalizationFeatureModule,
    StoreFinderFeatureModule,
    SmartEditFeatureModule,
    ProductBulkPricingFeatureModule,
    ProductVariantsFeatureModule,
    ProductImageZoomFeatureModule,
    OrganizationAdministrationFeatureModule,
    OrderFeatureModule,
    CheckoutFeatureModule,
    CartBaseFeatureModule,
    CartSavedCartFeatureModule,
    CartQuickOrderFeatureModule,
    CartImportExportFeatureModule,
    AsmFeatureModule,
    OlfModule
  ]
})
export class SpartacusFeaturesModule { }

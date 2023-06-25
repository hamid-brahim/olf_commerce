import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@spartacus/core';
import {OlfCheckoutDeliveryAddressComponent} from "./olf-checkout-delivery-address.component";
import {OlfAddressFormModule} from "../../../olf-account/olf-address-form/olf-address-form.module";
import {CardModule, SpinnerModule} from "@spartacus/storefront";


@NgModule({
  declarations: [OlfCheckoutDeliveryAddressComponent],
  imports: [
    CommonModule,
    I18nModule,
    OlfAddressFormModule,
    SpinnerModule,
    CardModule
  ]
})
export class OlfCheckoutDeliveryAddressModule { }

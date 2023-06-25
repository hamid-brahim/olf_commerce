import { Component, OnInit } from '@angular/core';
import {B2BCheckoutDeliveryAddressComponent} from "@spartacus/checkout/b2b/components";
import {CheckoutDeliveryAddressComponent} from "@spartacus/checkout/base/components";

@Component({
  selector: 'app-olf-checkout-delivery-address',
  templateUrl: './olf-checkout-delivery-address.component.html',
  styleUrls: ['./olf-checkout-delivery-address.component.scss']
})

export class OlfCheckoutDeliveryAddressComponent extends B2BCheckoutDeliveryAddressComponent {

  override showNewAddressForm(): void {
    this.addressFormOpened = true;
  }

}

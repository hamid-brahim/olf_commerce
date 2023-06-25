import { Component } from '@angular/core';
import { CheckoutPlaceOrderComponent } from '@spartacus/checkout/base/components';

@Component({
  selector: 'app-olf-place-order',
  templateUrl: './olf-place-order.component.html',
  styleUrls: ['./olf-place-order.component.scss']
})
export class OlfPlaceOrderComponent extends CheckoutPlaceOrderComponent {
  termsAndConditions = true;
}

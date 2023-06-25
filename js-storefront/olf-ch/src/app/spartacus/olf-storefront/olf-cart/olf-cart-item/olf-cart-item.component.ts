import { Component } from '@angular/core';
import { CartItemComponent, CartItemContextSource } from '@spartacus/cart/base/components';
import { CartItemContext } from '@spartacus/cart/base/root';


export interface CartItemComponentOptions {
  isSaveForLater?: boolean;
  optionalBtn?: any;
}

@Component({
  selector: 'app-olf-cart-item',
  templateUrl: './olf-cart-item.component.html',
  providers: [
    CartItemContextSource,
    { provide: CartItemContext, useExisting: CartItemContextSource },
  ],
})
export class OlfCartItemComponent extends CartItemComponent {
  
}


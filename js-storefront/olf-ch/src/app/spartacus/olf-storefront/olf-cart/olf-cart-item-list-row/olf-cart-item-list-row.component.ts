import { Component } from '@angular/core';
import { CartItemContextSource, CartItemListRowComponent } from '@spartacus/cart/base/components';
import { CartItemContext } from '@spartacus/cart/base/root';

@Component({
  selector: '[app-olf-cart-item-list-row], app-olf-cart-item-list-row',
  templateUrl: './olf-cart-item-list-row.component.html',
  styleUrls: ['./olf-cart-item-list-row.component.scss'],
  providers: [
    CartItemContextSource,
    { provide: CartItemContext, useExisting: CartItemContextSource },
  ],
})
export class OlfCartItemListRowComponent extends CartItemListRowComponent {
  showLabels: boolean = false;
  
  toggleLabels(event: any): void {
    // this.showLabels = !this.showLabels
    if (event.target.value == 'true') {
      this.showLabels = true;
    } else {
      this.showLabels = false;
    }
    
    console.log(this.showLabels);
  }
}



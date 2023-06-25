import { Component } from '@angular/core';
import {NavigationNode, StorefrontComponent} from '@spartacus/storefront';
import { ProductListOutlets } from '@spartacus/storefront';

@Component({
  selector: 'app-olf-storefront',
  templateUrl: './olf-storefront.component.html',
  styleUrls: ['./olf-storefront.component.scss']
})
export class OlfStorefrontComponent extends StorefrontComponent {
  readonly productListOutlets = ProductListOutlets;
  node: NavigationNode | undefined
}

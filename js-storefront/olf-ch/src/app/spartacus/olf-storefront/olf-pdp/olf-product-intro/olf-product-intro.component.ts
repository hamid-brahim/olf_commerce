import { Component, OnInit } from '@angular/core';
import { Language, Product } from '@spartacus/core/public_api';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import {OlfProductSummaryComponent} from "../olf-product-summary/olf-product-summary.component";

@Component({
  selector: 'app-olf-product-intro',
  templateUrl: './olf-product-intro.component.html',
  styleUrls: ['./olf-product-intro.component.scss']
})
export class OlfProductIntroComponent extends OlfProductSummaryComponent {


}

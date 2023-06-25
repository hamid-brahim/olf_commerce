import { Component, OnInit } from '@angular/core';
import {CmsService, Product, ProductService, SemanticPathService} from '@spartacus/core';
import {BannerComponent, CmsComponentData} from '@spartacus/storefront';
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";
import {CmsHomepageMainTileComponent as model} from '../cms.model';
@Component({
  selector: 'app-olf-homepage-main-tile',
  templateUrl: './olf-homepage-main-tile.component.html',
  styleUrls: ['./olf-homepage-main-tile.component.scss']
})
export class OlfHomepageMainTileComponent implements OnInit {

  product: Product;
  url: string;
  componentData$: Observable<model> = this.componentData.data$.pipe(
    filter((data)=> Boolean(data))
  )

  title$: Observable<string | undefined> = this.componentData$.pipe(
    map((data) => data.title)
  );
  product$: Observable<Observable<Product | undefined>> =
    this.componentData$.pipe(
      map((data) => data.products ?? ''),
      map((products) =>
          this.productService.get(products.trim())
        )
      );

  constructor(protected componentData: CmsComponentData<model>,
              protected productService: ProductService) {
  }

  ngOnInit(): void {

    }
}

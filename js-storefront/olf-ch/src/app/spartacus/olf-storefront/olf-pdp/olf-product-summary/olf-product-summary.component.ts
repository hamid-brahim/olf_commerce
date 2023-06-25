import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import {
  CurrentProductService,
  ProductSummaryComponent,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-olf-product-summary',
  templateUrl: './olf-product-summary.component.html',
  styleUrls: ['./olf-product-summary.component.scss'],
})
export class OlfProductSummaryComponent extends ProductSummaryComponent {
  private commonClassificationRoot = 'OlfClassification/1.0/common.';
  private booksClassificationRoot = 'OlfClassification/1.0/books.';
  private gamesClassificationRoot = 'OlfClassification/1.0/games.';
  private puzzlesClassificationRoot = 'OlfClassification/1.0/puzzles.';
  private othersClassificationRoot = 'OlfClassification/1.0/others.';

  // product$: Observable <Product>;
  //product$: Product;
  currentProduct: Product;

  constructor(private productService: CurrentProductService) {
    super(productService);
    this.product$.subscribe((data) => {
      this.currentProduct = data;
      this.currentProduct?.categories.forEach((category) => {
        if (this.currentProduct.category == undefined) {
          this.currentProduct.category = category.name;
        } else {
          this.currentProduct.category += ', ' + category.name;
        }
      });
    });
  }

  getCommonClassificationFeature(featureCode: String): String | undefined {
    let featureValue;
    this.currentProduct?.classifications.forEach((cls) => {
      cls?.features.forEach((feature) => {
        if (this.commonClassificationRoot + featureCode == feature.code) {
          featureValue = feature.featureValues[0].value;
        }
      });
    });
    return featureValue;
  }
  getClassificationFeature(featureCode: String): String | undefined {
    let featureValue;
    this.currentProduct?.classifications?.forEach((classification) => {
      classification?.features?.forEach((feature) => {
        if (this.getProductType() == 'book') {
          if (this.booksClassificationRoot + featureCode == feature.code) {
            if (feature.code == this.booksClassificationRoot + 'authors') {
              feature.featureValues.forEach((author) => {
                if (featureValue == undefined) {
                  featureValue = author.value;
                } else {
                  featureValue += ', ' + author.value;
                }
              });
            } else {
              featureValue = feature.featureValues[0].value;
            }
          }
        }
        if (this.getProductType() == 'games') {
          if (this.gamesClassificationRoot + featureCode == feature.code) {
            featureValue = feature.featureValues[0].value;
          }
        }
        if (this.getProductType() == 'puzzles') {
          if (this.puzzlesClassificationRoot + featureCode == feature.code) {
            featureValue = feature.featureValues[0].value;
          }
        }
        if (this.getProductType() == 'others') {
          if (this.othersClassificationRoot + featureCode == feature.code) {
            featureValue = feature.featureValues[0].value;
          }
        }
      });
    });
    return featureValue;
  }

  getProductType(): String {
    let productType;
    this.currentProduct.classifications.forEach((classification) => {
      classification?.features?.forEach((feature) => {
        if (this.commonClassificationRoot + 'producttype' == feature.code) {
          productType = feature.featureValues[0].value;
        }
      });
    });
    return productType;
  }
}

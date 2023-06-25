import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ProductListItemContext, ProductListItemContextSource, ProductListOutlets } from '@spartacus/storefront';

@Component({
  selector: 'app-olf-product-list-item',
  templateUrl: './olf-product-list-item.component.html',
  styleUrls: ['./olf-product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource,
    },
  ],
})
export class OlfProductListItemComponent implements OnChanges {
  private commonClassificationRoot = 'OlfClassification/1.0/common.';
  private booksClassificationRoot = 'OlfClassification/1.0/books.';
  private gamesClassificationRoot = 'OlfClassification/1.0/games.';
  private puzzlesClassificationRoot = 'OlfClassification/1.0/puzzles.';
  private othersClassificationRoot = 'OlfClassification/1.0/others.'

  @Input() product: any;

  constructor(
    protected productListItemContextSource: ProductListItemContextSource
  ) { }

  ngOnChanges(changes?: SimpleChanges): void {
    if (changes?.['product']) {
      this.productListItemContextSource.product$.next(this.product);
    }
  }

  getCommonClassificationFeature(featureCode: String):String {
    let featureValue: String;
    this.product?.classifications.forEach((cls: { features: any[]; }) => {
      cls?.features.forEach(feature =>{
        if(this.commonClassificationRoot+featureCode == feature.code){
          featureValue = feature.featureValues[0].value;
        }
      });
    });
    return featureValue;
  }

  getClassificationFeature(featureCode: String): String {
    let featureValue: String;
    this.product?.classifications?.forEach((classification: { features: { code: string; featureValues: { value: String; }[]; }[]; }) => {
      classification?.features?.forEach((feature: { code: string; featureValues: { value: String; }[]; }) => {
        if (this.getProductType() == 'books') {
          if (this.booksClassificationRoot + featureCode == feature.code) {
            if (feature.code == this.booksClassificationRoot + 'authors') {
              feature.featureValues.forEach((author: { value: String; }) => {
                if (featureValue == undefined) {
                  featureValue = author.value;
                } else {
                  featureValue += ", " + author.value;
                }
              })
            }
            else {
              featureValue = feature.featureValues[0].value;
            }
          }
        }
        if (this.getProductType() == 'game') {
          if (this.gamesClassificationRoot + featureCode == feature.code) {
            featureValue = feature.featureValues[0].value;
          }
        }
        if (this.getProductType() == 'puzzle') {
          if (this.puzzlesClassificationRoot + featureCode == feature.code) {
            featureValue = feature.featureValues[0].value;
          }
        }
        if (this.getProductType() == 'other') {
          if (this.othersClassificationRoot + featureCode == feature.code) {
            featureValue = feature.featureValues[0].value;
          }
        }
      })
    })

    return featureValue;
  }

  getProductType(): String {
    let productType: String;
    this.product.classifications.forEach((classification: { features: { code: string; featureValues: { value: String; }[]; }[]; }) => {
      classification?.features?.forEach((feature: { code: string; featureValues: { value: String; }[]; }) => {
        if (this.commonClassificationRoot + 'producttype' == feature.code) {
          productType = feature.featureValues[0].value;
        }
      });
    });
    return productType;
  }
}

import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { ProductListItemContext, ProductListItemContextSource } from '@spartacus/storefront';
let OlfProductListItemComponent = class OlfProductListItemComponent {
    constructor(productListItemContextSource) {
        this.productListItemContextSource = productListItemContextSource;
        this.commonClassificationRoot = 'OlfClassification/1.0/common.';
        this.booksClassificationRoot = 'OlfClassification/1.0/books.';
        this.gamesClassificationRoot = 'OlfClassification/1.0/games.';
        this.puzzlesClassificationRoot = 'OlfClassification/1.0/puzzles.';
        this.othersClassificationRoot = 'OlfClassification/1.0/others.';
    }
    ngOnChanges(changes) {
        if (changes?.['product']) {
            this.productListItemContextSource.product$.next(this.product);
        }
    }
    getCommonClassificationFeature(featureCode) {
        let featureValue;
        this.product?.classifications.forEach((cls) => {
            cls?.features.forEach(feature => {
                if (this.commonClassificationRoot + featureCode == feature.code) {
                    featureValue = feature.featureValues[0].value;
                }
            });
        });
        return featureValue;
    }
    getClassificationFeature(featureCode) {
        let featureValue;
        this.product?.classifications?.forEach((classification) => {
            classification?.features?.forEach((feature) => {
                if (this.getProductType() == 'books') {
                    if (this.booksClassificationRoot + featureCode == feature.code) {
                        if (feature.code == this.booksClassificationRoot + 'authors') {
                            feature.featureValues.forEach((author) => {
                                if (featureValue == undefined) {
                                    featureValue = author.value;
                                }
                                else {
                                    featureValue += ", " + author.value;
                                }
                            });
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
            });
        });
        return featureValue;
    }
    getProductType() {
        let productType;
        this.product.classifications.forEach((classification) => {
            classification?.features?.forEach((feature) => {
                if (this.commonClassificationRoot + 'producttype' == feature.code) {
                    productType = feature.featureValues[0].value;
                }
            });
        });
        return productType;
    }
};
__decorate([
    Input()
], OlfProductListItemComponent.prototype, "product", void 0);
OlfProductListItemComponent = __decorate([
    Component({
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
], OlfProductListItemComponent);
export { OlfProductListItemComponent };
//# sourceMappingURL=olf-product-list-item.component.js.map
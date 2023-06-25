import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ProductSummaryComponent, } from '@spartacus/storefront';
let OlfProductSummaryComponent = class OlfProductSummaryComponent extends ProductSummaryComponent {
    constructor(productService) {
        super(productService);
        this.productService = productService;
        this.commonClassificationRoot = 'OlfClassification/1.0/common.';
        this.booksClassificationRoot = 'OlfClassification/1.0/books.';
        this.gamesClassificationRoot = 'OlfClassification/1.0/games.';
        this.puzzlesClassificationRoot = 'OlfClassification/1.0/puzzles.';
        this.othersClassificationRoot = 'OlfClassification/1.0/others.';
        this.product$.subscribe((data) => {
            this.currentProduct = data;
            this.currentProduct?.categories.forEach((category) => {
                if (this.currentProduct.category == undefined) {
                    this.currentProduct.category = category.name;
                }
                else {
                    this.currentProduct.category += ', ' + category.name;
                }
            });
        });
    }
    getCommonClassificationFeature(featureCode) {
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
    getClassificationFeature(featureCode) {
        let featureValue;
        this.currentProduct?.classifications?.forEach((classification) => {
            classification?.features?.forEach((feature) => {
                if (this.getProductType() == 'book') {
                    if (this.booksClassificationRoot + featureCode == feature.code) {
                        if (feature.code == this.booksClassificationRoot + 'authors') {
                            feature.featureValues.forEach((author) => {
                                if (featureValue == undefined) {
                                    featureValue = author.value;
                                }
                                else {
                                    featureValue += ', ' + author.value;
                                }
                            });
                        }
                        else {
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
    getProductType() {
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
};
OlfProductSummaryComponent = __decorate([
    Component({
        selector: 'app-olf-product-summary',
        templateUrl: './olf-product-summary.component.html',
        styleUrls: ['./olf-product-summary.component.scss'],
    })
], OlfProductSummaryComponent);
export { OlfProductSummaryComponent };
//# sourceMappingURL=olf-product-summary.component.js.map
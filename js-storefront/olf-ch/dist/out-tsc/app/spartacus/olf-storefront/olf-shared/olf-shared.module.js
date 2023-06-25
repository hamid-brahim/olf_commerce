import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OlfCategoriesRowComponent } from './components/olf-categories-row/olf-categories-row.component';
import { OlfCategoriesComponent } from './components/olf-categories/olf-categories.component';
import { OlfCategoriesService } from './services/olf-categories-service';
let OlfSharedModule = class OlfSharedModule {
};
OlfSharedModule = __decorate([
    NgModule({
        declarations: [
            OlfCategoriesComponent,
            OlfCategoriesRowComponent
        ],
        imports: [
            CommonModule
        ],
        exports: [
            OlfCategoriesComponent,
            OlfCategoriesRowComponent
        ],
        providers: [
            OlfCategoriesService
        ]
    })
], OlfSharedModule);
export { OlfSharedModule };
//# sourceMappingURL=olf-shared.module.js.map
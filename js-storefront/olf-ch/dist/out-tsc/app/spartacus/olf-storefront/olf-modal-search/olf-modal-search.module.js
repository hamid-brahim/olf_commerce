import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';
import { OlfmodalSearchComponent } from './olf-modal-search.component';
let OlfmodalSearchModule = class OlfmodalSearchModule {
};
OlfmodalSearchModule = __decorate([
    NgModule({
        declarations: [OlfmodalSearchComponent],
        imports: [
            CommonModule,
            RouterModule,
            IconModule,
            UrlModule,
            I18nModule,
            MediaModule
        ],
        exports: [
            OlfmodalSearchComponent
        ],
    })
], OlfmodalSearchModule);
export { OlfmodalSearchModule };
//# sourceMappingURL=olf-modal-search.module.js.map
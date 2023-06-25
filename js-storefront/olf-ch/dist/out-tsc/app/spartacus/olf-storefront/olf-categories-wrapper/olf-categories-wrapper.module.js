import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { OlfSharedModule } from '../olf-shared/olf-shared.module';
import { categoriesWrapperCmsConfig, categoriesWrapperCmsStructureConfig, categoriesWrapperLayoutConfig } from './config/categories-wrapper-config';
import { OlfCategoriesWrapperComponent } from './olf-categories-wrapper.component';
let OlfCategoriesWrapperModule = class OlfCategoriesWrapperModule {
};
OlfCategoriesWrapperModule = __decorate([
    NgModule({
        declarations: [
            OlfCategoriesWrapperComponent
        ],
        imports: [
            CommonModule,
            I18nModule,
            OlfSharedModule,
            ConfigModule.withConfigFactory(categoriesWrapperCmsStructureConfig),
            ConfigModule.withConfig(categoriesWrapperCmsConfig),
            ConfigModule.withConfig(categoriesWrapperLayoutConfig)
        ],
        exports: [
            OlfCategoriesWrapperComponent
        ]
    })
], OlfCategoriesWrapperModule);
export { OlfCategoriesWrapperModule };
//# sourceMappingURL=olf-categories-wrapper.module.js.map
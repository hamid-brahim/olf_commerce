import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfHomepageMainTileComponent } from './olf-homepage-main-tile/olf-homepage-main-tile.component';
import { OlfHomepageSideTileComponent } from './olf-homepage-side-tile/olf-homepage-side-tile.component';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { MediaModule } from '@spartacus/storefront';
import { OlfHomepageCategoryTileComponent } from './olf-homepage-category-tile/olf-homepage-category-tile.component';
import { OlfHomepageOthersTileComponent } from './olf-homepage-others-tile/olf-homepage-others-tile.component';
import { RouterModule } from '@angular/router';
import { OlfHomepageGameTileComponent } from './olf-homepage-game-tile/olf-homepage-game-tile.component';
let OlfHomepageModule = class OlfHomepageModule {
};
OlfHomepageModule = __decorate([
    NgModule({
        declarations: [
            OlfHomepageMainTileComponent,
            OlfHomepageSideTileComponent,
            OlfHomepageCategoryTileComponent,
            OlfHomepageOthersTileComponent,
            OlfHomepageCategoryTileComponent,
            OlfHomepageGameTileComponent,
        ],
        imports: [
            CommonModule,
            MediaModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    HomepageMainTileComponent: {
                        component: () => import('./olf-homepage-main-tile/olf-homepage-main-tile.component').then((m) => m.OlfHomepageMainTileComponent),
                    },
                    HomepageSideTileTopComponent: {
                        component: () => import('./olf-homepage-side-tile/olf-homepage-side-tile.component').then((m) => m.OlfHomepageSideTileComponent),
                    },
                    HomepageSideTileBottomComponent: {
                        component: () => import('./olf-homepage-side-tile/olf-homepage-side-tile.component').then((m) => m.OlfHomepageSideTileComponent),
                    },
                    HomepageCategoryTileLeftComponent: {
                        component: () => import('./olf-homepage-category-tile/olf-homepage-category-tile.component').then((m) => m.OlfHomepageCategoryTileComponent),
                    },
                    HomepageCategoryTileCenterComponent: {
                        component: () => import('./olf-homepage-category-tile/olf-homepage-category-tile.component').then((m) => m.OlfHomepageCategoryTileComponent),
                    },
                    HomepageCategoryTileRightComponent: {
                        component: () => import('./olf-homepage-category-tile/olf-homepage-category-tile.component').then((m) => m.OlfHomepageCategoryTileComponent),
                    },
                    HomepageGameTileComponent: {
                        component: () => import('./olf-homepage-game-tile/olf-homepage-game-tile.component').then((m) => m.OlfHomepageGameTileComponent),
                    },
                    HomepageOthersTileComponent: {
                        component: () => import('./olf-homepage-others-tile/olf-homepage-others-tile.component').then((m) => m.OlfHomepageOthersTileComponent),
                    },
                }
            }),
            UrlModule,
            RouterModule,
            I18nModule,
        ],
        exports: [
            OlfHomepageMainTileComponent,
            OlfHomepageSideTileComponent,
            OlfHomepageCategoryTileComponent,
            OlfHomepageOthersTileComponent,
            OlfHomepageCategoryTileComponent,
            OlfHomepageGameTileComponent,
        ]
    })
], OlfHomepageModule);
export { OlfHomepageModule };
//# sourceMappingURL=olf-homepage.module.js.map
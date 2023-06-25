import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { OrderRootModule, ORDER_FEATURE } from "@spartacus/order/root";
let OrderFeatureModule = class OrderFeatureModule {
};
OrderFeatureModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            OrderRootModule
        ],
        providers: [provideConfig({
                featureModules: {
                    [ORDER_FEATURE]: {
                        module: () => import('@spartacus/order').then((m) => m.OrderModule),
                    },
                }
            }), provideConfig({
                cmsComponents: {
                    QuickOrderComponent: {
                        data: {
                            quickOrderListLimit: 50, //Increase list limit to 50 items. Standard 10.
                        }
                    },
                },
            }),
        ]
    })
], OrderFeatureModule);
export { OrderFeatureModule };
//# sourceMappingURL=order-feature.module.js.map
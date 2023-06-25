import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfSearchboxComponent } from './olf-searchbox/olf-searchbox.component';
import {CmsConfig, ConfigModule, I18nModule} from '@spartacus/core';
import { IconModule, SearchBoxModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    OlfSearchboxComponent
  ],
    imports: [
        CommonModule,
        SearchBoxModule,
        IconModule,
        ConfigModule.withConfig({
            cmsComponents: {
                SearchBoxComponent: {
                    component: OlfSearchboxComponent
                }
            }
        } as CmsConfig),
        I18nModule,
    ],
  exports: [
    OlfSearchboxComponent
  ]
})
export class OlfSearchboxModule { }

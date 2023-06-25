import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from "@spartacus/core";
import { OlfToggleStatusComponent } from './olf-toggle-status.component';


@NgModule({
  declarations: [
    OlfToggleStatusComponent
  ],
  imports: [
    CommonModule,
    I18nModule
  ],
  exports: [
    OlfToggleStatusComponent
  ]
})
export class OlfToggleStatusModule { }

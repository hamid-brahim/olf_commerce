import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlfLoginComponent } from './olf-login.component';
import {FormErrorsModule, PageSlotModule, SpinnerModule} from "@spartacus/storefront";
import {RouterModule} from "@angular/router";
import {I18nModule, UrlModule} from "@spartacus/core";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    PageSlotModule,
    RouterModule,
    I18nModule,
    UrlModule,
    SpinnerModule,
    ReactiveFormsModule,
    FormErrorsModule,
  ],
  declarations: [
    OlfLoginComponent,

  ],
  exports:[
    OlfLoginComponent,
  ]

})
export class OlfLoginModule { }

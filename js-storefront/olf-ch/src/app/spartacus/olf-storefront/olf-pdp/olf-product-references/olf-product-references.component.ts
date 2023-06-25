import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CmsProductReferencesComponent, Product, ProductReference, ProductReferenceService, isNotNullable } from '@spartacus/core';
import { CmsComponentData, CurrentProductService, ProductReferencesComponent } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { filter, map, tap, withLatestFrom, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-olf-product-references',
  templateUrl: './olf-product-references.component.html',
  styleUrls: ['./olf-product-references.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OlfProductReferencesComponent extends ProductReferencesComponent {
  @Input() referenceType: string;

  override items$: Observable<Observable<Product>[]> = this.productCode$.pipe(
    withLatestFrom(this.componentData$),
    tap(([productCode, data]) =>
      this.productReferenceService.loadProductReferences(
        productCode,
        this.referenceType.toUpperCase()
      )
    ),
    switchMap(([productCode, data]) =>
      this.getProductReferencesCustom(productCode, this.referenceType.toUpperCase())
    )
  );


  private getProductReferencesCustom(
    code: string,
    referenceType: string
  ): Observable<Observable<Product>[]> {
    return this.productReferenceService
      .getProductReferences(code, referenceType)
      .pipe(
        filter(Boolean),
        map((references: ProductReference[]) =>
          references.map((reference) => of(reference.target))
        )
      );
  }
}

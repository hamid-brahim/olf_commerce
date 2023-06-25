import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AddressFormComponent } from "@spartacus/storefront";
import { switchMap, tap } from "rxjs/operators";
import { Validators } from "@angular/forms";
let OlfAddressFormComponent = class OlfAddressFormComponent extends AddressFormComponent {
    constructor() {
        super(...arguments);
        this.addressForm = this.fb.group({
            country: this.fb.group({
                isocode: 'CH',
            }),
            titleCode: [''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            line1: ['', Validators.required],
            line2: [''],
            town: ['', Validators.required],
            region: this.fb.group({
                isocode: [null, Validators.required],
            }),
            postalCode: ['', Validators.required],
            phone: '',
            cellphone: '',
            defaultAddress: [false],
        });
        // override countrySelected(country: Country | undefined): void {
        //   this.addressForm.get('country')?.get('CH')?.setValue(country?.isocode);
        //   this.selectedCountry$.next(country?.isocode ?? '');
        // }
    }
    ngOnInit() {
        super.ngOnInit();
        this.countries$.subscribe(countries => {
            countries.forEach(country => {
                if (country.isocode === 'CH') {
                    this.filteredCountry = country;
                }
            });
        });
        this.regions$ = this.countries$.pipe(switchMap((country) => this.userAddressService.getRegions('CH')), tap((regions) => {
            const regionControl = this.addressForm.get('region.isocode');
            if (regions && regions.length > 0) {
                regionControl?.enable();
            }
            else {
                regionControl?.disable();
            }
        }));
    }
};
OlfAddressFormComponent = __decorate([
    Component({
        selector: 'cx-olf-address-form',
        templateUrl: './olf-address-form.component.html',
        styleUrls: ['./olf-address-form.component.scss']
    })
], OlfAddressFormComponent);
export { OlfAddressFormComponent };
//# sourceMappingURL=olf-address-form.component.js.map
import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {
  Address, AddressValidation,
  Country,
  GlobalMessageService, GlobalMessageType,
  Occ,
  Title,
  TranslationService,
  UserAddressService,
  UserService
} from '@spartacus/core';
import {AddressFormComponent, LAUNCH_CALLER, LaunchDialogService, sortTitles} from "@spartacus/storefront";
import {BehaviorSubject, combineLatest, Observable, Subscription} from "rxjs";
import {filter, map, switchMap, take, tap} from "rxjs/operators";
import Region = Occ.Region;
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import ErrorModel = Occ.ErrorModel;

@Component({
  selector: 'cx-olf-address-form',
  templateUrl: './olf-address-form.component.html',
  styleUrls: ['./olf-address-form.component.scss']
})
export class OlfAddressFormComponent extends AddressFormComponent {

  filteredCountry : Country;
  override addressForm: UntypedFormGroup = this.fb.group({
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

  override ngOnInit() {
    super.ngOnInit();
    this.countries$.subscribe(countries => {
      countries.forEach(country => {
        if(country.isocode === 'CH'){
          this.filteredCountry = country
        }
      });
    });
    this.regions$ = this.countries$.pipe(
      switchMap((country) => this.userAddressService.getRegions('CH')),
      tap((regions: Region[]) => {
        const regionControl = this.addressForm.get('region.isocode');
        if (regions && regions.length > 0) {
          regionControl?.enable();
        } else {
          regionControl?.disable();
        }
      })
    );

  }

  // override countrySelected(country: Country | undefined): void {
  //   this.addressForm.get('country')?.get('CH')?.setValue(country?.isocode);
  //   this.selectedCountry$.next(country?.isocode ?? '');
  // }

}


import { Component, Input, OnDestroy } from '@angular/core';
import {
  BaseItem, ConfirmationMessageComponent,
  ConfirmationMessageData, DisableInfoService,
  ItemService, MessageService
} from "@spartacus/organization/administration/components";
import { LoadStatus } from "@spartacus/organization/administration/core";
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, first, take } from "rxjs/operators";

@Component({
  selector: 'olf-org-toggle-status',
  templateUrl: './olf-toggle-status.component.html',
  styleUrls: ['./olf-toggle-status.component.scss']
})
export class OlfToggleStatusComponent<T extends BaseItem> implements OnDestroy {

  /**
   * The localization of messages is based on the i18n root. Messages are
   * concatenated to the root, such as:
   *
   * `[i18nRoot].messages.deactivate`
   */
  @Input() i18nRoot: string;

  /**
   * The key input can be used to add a custom key.
   *
   * Most _organization_ entities use the `code` key, but there is some variations.
   */
  @Input() key = 'code';

  /**
   * The disabled state is calculated but can be provided as well.
   */
  @Input() disabled: boolean;

  /**
   * resolves the current item.
   */
  current$: Observable<T | undefined> = this.itemService.current$;

  /**
   * resolves if the user is currently in the edit form.
   */
  isInEditMode$: Observable<boolean> = this.itemService.isInEditMode$;

  protected subscription = new Subscription();
  protected confirmation: Subject<ConfirmationMessageData> | null;

  constructor(
    protected itemService: ItemService<T>,
    protected messageService: MessageService<ConfirmationMessageData>,
    protected disableInfoService: DisableInfoService<T>
  ) { }

  toggle(item: T) {
    // if (!item.active) {
    // we do ask for confirmation when the entity gets activated
    this.update(item);
    // }
    // else {
    console.log('Inside else statment');
    console.log(ConfirmationMessageComponent);
    this.confirmation = this.messageService.add({
      message: {
        key: this.i18nRoot + '.messages.deactivate',
        params: { item },
      },
      messageTitle: {
        key: this.i18nRoot + '.messages.deactivateTitle',
        params: { item },
      },
      confirm: {
        key: 'organization.confirmation.disable',
      },
      component: ConfirmationMessageComponent,
    });

    this.subscription.add(
      this.confirmation.pipe(first()).subscribe((event) => {
        if (event.close) {
          this.confirmation = null;
        }
        if (event.confirm) {
          this.messageService.close(this.confirmation);
          this.update(item);
          this.confirmation = null;
        }
      })
    );
    // }
  }

  /**
   * Indicates whether the status can be toggled or not.
   */
  isDisabled(item: T): boolean {
    return (
      this.disabled ??
      (this.disableInfoService.isParentDisabled(item) ||
        this.disableInfoService.isRootUnit(item))
    );
  }

  protected update(item: T): void {
    console.log('Inside the update method');
    this.itemService
      .update(
        item[this.key as keyof BaseItem] as string,
        this.getPatchedItem(item)
      )
      .pipe(
        take(1),
        filter((data) => data.status === LoadStatus.SUCCESS)
      )
      .subscribe((data) => this.notify({ ...item, ...data.item }));
  }

  protected getPatchedItem(item: T): T {
    const patch: BaseItem = {};

    Object.assign(patch, { [this.key]: item[this.key as keyof T] });

    patch.active = !item.active;
    return patch as T;
  }

  protected notify(item: T) {
    this.messageService.add({
      message: {
        key: `${this.i18nRoot}.messages.${item.active ? 'confirmEnabled' : 'confirmDisabled'
          }`,
        params: { item },
      },
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}

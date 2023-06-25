import { Injectable } from '@angular/core';
import { B2BUser, Occ } from '@spartacus/core';
import { OccB2BUserNormalizer } from "@spartacus/organization/administration/occ";

@Injectable({
  providedIn: 'root'
})

export class OlfOccB2bUserNormalizer extends OccB2BUserNormalizer {

  override convert(source: Occ.B2BUser, target?: B2BUser): B2BUser {
    if (target === undefined) {
      target = { ...(source as any) } as B2BUser;
    }
    target.email = source?.displayUid;
    target.uid = source?.displayUid;

    return target;
  }
}

import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { OccB2BUserNormalizer } from "@spartacus/organization/administration/occ";
let OlfOccB2bUserNormalizer = class OlfOccB2bUserNormalizer extends OccB2BUserNormalizer {
    convert(source, target) {
        if (target === undefined) {
            target = { ...source };
        }
        target.email = source?.displayUid;
        target.uid = source?.displayUid;
        return target;
    }
};
OlfOccB2bUserNormalizer = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OlfOccB2bUserNormalizer);
export { OlfOccB2bUserNormalizer };
//# sourceMappingURL=olf-occ-b2b-user-normalizer.js.map
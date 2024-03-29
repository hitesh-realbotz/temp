import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { ConfirmService } from '../_services/confirm.service';
import { inject } from '@angular/core';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {

  // if (component.editForm?.dirty) {
  //   return confirm('Are you sure you want to continue? Any unsaved changes will be lost')
  // }
  const confirmService = inject(ConfirmService);

  if (component.editForm?.dirty) {
    return confirmService.confirm();
  }
  return true;
};

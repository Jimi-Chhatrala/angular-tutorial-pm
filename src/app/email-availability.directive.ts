import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map, of, timer } from 'rxjs';

export const COMPLETE_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

@Directive({
  selector: '[appEmailAvailability][ngModel]',
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailAvailabilityValidator),
      multi: true,
    },
  ],
})
export class EmailAvailabilityValidator implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (
      typeof control.value !== 'string' ||
      !COMPLETE_EMAIL_PATTERN.test(control.value)
    ) {
      return of(null);
    }

    return timer(1000).pipe(
      map(() =>
        control.value?.toLowerCase() === 'taken@example.com' ? { emailTaken: true } : null,
      ),
    );
  }
}

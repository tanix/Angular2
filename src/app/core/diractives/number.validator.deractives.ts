import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { validateNumber } from '../validators/number.validator';

@Directive({
	selector: '[validateNumber][ngModel],[validateNumber][formControl]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => NumberValidator), multi: true }
	]
})

export class NumberValidator implements Validator {

	validate(c: FormControl) {
		return validateNumber(c);
	}
}

import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { validateEmail } from '../validators/email.validator';

@Directive({
	selector: '[validateEmail][ngModel],[validateEmail][formControl]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true }
	]
})

export class EmailValidator implements Validator {

	validate(c: FormControl) {
		return validateEmail(c);
	}
}

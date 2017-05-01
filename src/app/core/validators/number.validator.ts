import { FormControl } from '@angular/forms';

export function validateNumber(c: FormControl): {[key: string]: boolean} {
	let NUMB_REGEXP = new RegExp('^[0-9]+$');

	return NUMB_REGEXP.test(c.value) ? null : { invalidNumber: true };
}

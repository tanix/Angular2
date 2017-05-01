import { FormControl } from '@angular/forms';

export function validateNumber(c: FormControl): {[key: string]: boolean} {
	let EMAIL_REGEXP = new RegExp('^[0-9]+$');

	return EMAIL_REGEXP.test(c.value) ? null : { invalidNumber: true };
}

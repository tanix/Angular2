import { FormControl } from '@angular/forms';

export function validateDate(c: FormControl): {[key: string]: boolean} {
	let DATE_REGEXP = new RegExp('^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$');

	return DATE_REGEXP.test(c.value) ? null : { invalidDate: true };
}

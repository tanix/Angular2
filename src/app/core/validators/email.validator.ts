import { FormControl } from '@angular/forms';

export function validateEmail(c: FormControl): {[key: string]: boolean} {
	let EMAIL_REGEXP = new RegExp('\\S+@\\S+\\.\\S+');

	return EMAIL_REGEXP.test(c.value) ? null : { invalidEmail: true };
}

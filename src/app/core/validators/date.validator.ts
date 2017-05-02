import { FormControl } from '@angular/forms';

export function validateDate(c: FormControl): {[key: string]: boolean} {

	let pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	//alert(pattern.test(this.date));

	return pattern.test(c.value) ? null : { invalidDate: true };
}

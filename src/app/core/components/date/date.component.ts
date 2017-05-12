import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
	selector: 'date-component',
	template:`<input type="text" class="form-control" id="date" value="{{date}}" (keyup)="onChange($event)" placeholder="DD/MM/YYYY">`,
	styles: [require('./date.component.scss')],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => dateComponent),
			multi: true,
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => dateComponent),
			multi: true,
		}]
})
export class dateComponent implements ControlValueAccessor, Validator {
	private isError: boolean;
	private date: string;

	// this is the initial value set to the component
	public writeValue(value: string) {
		if (value) {
			this.date = value;
		}
	}

	// registers 'fn' that will be fired when changes are made
	// this is how we emit the changes back to the form
	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	// validates the form, returns null when valid else the validation object
	public validate(c: FormControl) {
		if(this.date) {
			let inputDate = this.date.split('/');
			let day = inputDate[0], mounth = inputDate[1], year = inputDate[2];

			let date = new Date(year + '/' + mounth + '/' + day), today = new Date();

			let pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
			return pattern.test(this.date) && (today.getTime() >= date.getTime()) ? null : { invalidDate: true };
		}
	}

	// not used, used for touch input
	public registerOnTouched() { }

	// change events from the inputs
	private onChange(event) {
		this.date = event.target.value;

		this.propagateChange(this.date);
	}

	// the method set in registerOnChange to emit changes back to the form
	private propagateChange = (_: any) => { };
}

import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
	selector: 'authors-component',
	template:`
	<div id="authors">
       <div *ngFor="let item of data">
            <label><input type="checkbox" value="{{item}}" (change)="onChange($event)"> {{item}}</label>
       </div>
    </div>`,
	styles: [require('./authors.component.scss')],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => authorsComponent),
			multi: true,
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => authorsComponent),
			multi: true,
		}]
})
export class authorsComponent implements ControlValueAccessor, Validator {
	private items = [];
	private isError: boolean = true;
	private data: any;

	// this is the initial value set to the component
	public writeValue(obj: any) {
		if (obj) {
			this.data = obj;
		}
	}

	// registers 'fn' that will be fired when changes are made
	// this is how we emit the changes back to the form
	public registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	// validates the form, returns null when valid else the validation object
	public validate(c: FormControl) {
		return (!this.isError) ? null : {
				isError: {
					valid: false,
				},
			};
	}

	// not used, used for touch input
	public registerOnTouched() { }

	// change events from the inputs
	private onChange(event) {

		let target = event.target.parentNode;
		let parent = target.parentNode.parentNode;

		let inputs = parent.getElementsByTagName("input");

		for (let i = 0; i < inputs.length; i++) {
			let status = inputs[i];

			if (status.checked) {
				this.isError = false; break;
			} else {
				this.isError = true;
			}
		}

		this.items = [];
		for (let i = 0; i < inputs.length; i++) {
			let status = inputs[i];

			console.log(inputs[i]);
			if (status.checked) {
				this.items.push(inputs[i].value);
			}
		}

		this.propagateChange(this.items);
	}

	// the method set in registerOnChange to emit changes back to the form
	private propagateChange = (_: any) => { };
}

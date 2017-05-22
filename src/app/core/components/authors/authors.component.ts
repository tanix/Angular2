import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { Authors } from '../../interfaces/authors/authors.interface';
import {stringDistance} from "codelyzer/util/utils";

@Component({
	selector: 'authors-component',
	template:`
	<div id="authors">
       <div *ngFor="let item of data; let i = index">
            <label for="{{i}}"><input id="{{i}}" type="checkbox" value="{{item}}" (change)="onChange($event)" checked="checked"> {{item.firstName}} {{item.lastName}} </label>
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
	private data: Authors;
	private itemValue: string;

	// this is the initial value set to the component
	public writeValue(obj: Authors) {
		if (obj) {
			this.data = obj;
			this.isError = false;
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

			if (status.checked) {
				this.itemValue = inputs[i].parentNode.textContent.split(" ");
				this.items.push({"id": i, "firstName": this.itemValue[1], "lastName": this.itemValue[2]});
			}
		}

		this.propagateChange(this.items);
	}

	// the method set in registerOnChange to emit changes back to the form
	private propagateChange = (_: any) => { };
}

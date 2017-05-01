import {Component, Input, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

const CUSTOM_RADIO_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => textareaComponent),
	multi: true
};

@Component({
	selector: 'textarea-component',
	templateUrl: 'authors.component.html',
	providers: [CUSTOM_RADIO_VALUE_ACCESSOR]
})
export class textareaComponent implements ControlValueAccessor {
	@Input() items: string[];
	currentValue: any;



	setValue(item) {
		this.currentValue = item.target.value;
		this.writeValue(this.currentValue);
	}

	onChange = (_) => {};
	onTouched = () => {};

	writeValue(value: any) {
		if (value !== undefined) {
			this.currentValue = value;
			console.log(this.currentValue);
		}
	}

	registerOnChange(fn: any) {
		this.onChange = fn;
	}

	registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

}

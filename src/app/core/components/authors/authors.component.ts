import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'authors-component',
	templateUrl: 'authors.component.html',
	styles: [require('./authors.component.scss')],
	changeDetection: ChangeDetectionStrategy.Default
})

export class authorsComponent {

	constructor() { }

	public selected($event) {
	}
}

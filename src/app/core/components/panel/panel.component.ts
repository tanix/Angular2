import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'panel',
	templateUrl: './panel.component.html',
	styles: [require('./panel.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class PanelComponent {
	constructor() {

	}
}

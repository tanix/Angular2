import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'modal',
	templateUrl: 'modal.component.html',
	styles: [require('./modal.component.scss')]
})
export class ModalComponent {
	constructor() { }

	@Output('change') public deleteCourseItemAction = new EventEmitter();

	public deleteCourse() {
		this.deleteCourseItemAction.emit({
			delete: true
		})
	}
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'course-control-panel',
	templateUrl: 'course-control-panel.component.html',
	styles: [require('./course-control-panel.component.scss')]
})
export class CourseControlPanelComponent {

	public courseQuery: string = '';

	constructor() {
		this.courseQuery = '';
	}

	@Output('change') public filterQuery = new EventEmitter();

	public filterCourseQuery() {
		this.filterQuery.emit({
			courseQuery: this.courseQuery
		})
	}
}

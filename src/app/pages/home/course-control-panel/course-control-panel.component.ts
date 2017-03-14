import { Component } from '@angular/core';

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

	public findCourseQuery() {
		console.log(this.courseQuery);
	}
}

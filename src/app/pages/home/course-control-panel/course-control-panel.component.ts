import { Component, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

@Component({
	selector: 'course-control-panel',
	templateUrl: 'course-control-panel.component.html',
	styles: [require('./course-control-panel.component.scss')],
	changeDetection: ChangeDetectionStrategy.Default
})
export class CourseControlPanelComponent {

	public courseQuery: string = '';

	constructor() {
		this.courseQuery = '';
	}

	@Output('change') public filterQuery = new EventEmitter();

	public filterCourseQuery($event) {
		$event.preventDefault();

		this.filterQuery.emit({
			courseQuery: this.courseQuery
		});
	}
}

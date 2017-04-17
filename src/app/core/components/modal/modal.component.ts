import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Course } from './../../interfaces/courses/courses.interface'

@Component({
	selector: 'modal',
	templateUrl: 'modal.component.html',
	styles: [require('./modal.component.scss')],
	changeDetection: ChangeDetectionStrategy.Default
})

export class ModalComponent implements OnChanges {

	@Input('course') course: Course;
	@Output('change') public deleteCourseItemAction = new EventEmitter();

	public courseTitle: string = '';

	constructor() { }

	public ngOnChanges() {
		if(this.course) {
			this.courseTitle = this.course.title;
		}
	}

	public deleteCourse() {
		this.deleteCourseItemAction.emit({
			delete: true
		})
	}
}

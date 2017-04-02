import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../core/interfaces';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.component.html',
	styles: [require('./course-item.component.scss')],
	providers: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
	public id: number;
	public title: string;
	public duration: any;
	public description: string;

	@Input('init') public courseItem:Course;
	@Output('change') public deleteCourseId = new EventEmitter();

	constructor() {}

	public deleteCourse(id: number) {
		this.deleteCourseId.emit({
			CourseId: id
		})
	}
}

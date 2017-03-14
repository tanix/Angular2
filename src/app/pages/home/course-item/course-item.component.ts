import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.component.html',
	styles: [require('./course-item.component.scss')],
	providers: []
})

// interface Course {
// 	id: number;
// 	title: string;
// 	createDate: Date;
// 	duration: string;
// 	description: string;
// }

export class CourseItemComponent {
	public id: number;
	public title: string;
	public createDate: Date;
	public duration: string;
	public description: string;

	constructor() {	}

	//@Input('init') public courseItem: Course;
	@Input('init') public courseItem;
	@Output('change') public deleteCourseId = new EventEmitter();

	public deleteCourse(id: number) {
		this.deleteCourseId.emit({
			value: id
		})
	}
}

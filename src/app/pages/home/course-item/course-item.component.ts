import { Component, Input, Output, EventEmitter } from '@angular/core';

//import { Course } from '../../../core/entities';
//import { todoStatusClasses } from '../../../core/enums';

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
	id: number;
	title: string;
	createDate: Date;
	duration: string;
	description: string;

	constructor() {	}

	//@Input('init') public courseItem: Course;
	@Input('init') public courseItem;
	@Output('change') public counterChange = new EventEmitter();

	public deleteCourse(id: number) {
		this.counterChange.emit({
			value: id
		})
	}
}

import { Component, ViewEncapsulation, Input } from '@angular/core';
import { TodoItem } from '../../../core/entities';
import { todoStatusClasses } from '../../../core/enums';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.component.html',
	styles: [require('./course-item.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CourseComponent {
	@Input() public todo: TodoItem;

	constructor() {
	}

	public calculateStatusClass(status): string {
		return todoStatusClasses[status];
	}
}

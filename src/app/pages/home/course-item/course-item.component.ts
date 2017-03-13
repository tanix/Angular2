import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../../../core/entities';
//import { todoStatusClasses } from '../../../core/enums';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.component.html',
	styles: [require('./course-item.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})

// interface Item {
// 	id: number;
// 	title: string;
// 	startDate: string;
// 	endDate: string;
// 	duration: string;
// 	description: string;
// }
// export class CourseItemComponent implements Item {

export class CourseItemComponent {
	// public id: number;
	// public title: string;
	// public startDate: string;
	// public endDate: string;
	// public duration: string;
	// public description: string;

	constructor() {
		// this.id = 125;
		// this.title ='Video course';
		// this.startDate = '2013-09-25T11:38:41+00:00';
		// this.endDate = '2013-12-30T22:50:39+00:00';
		// this.duration = '10h 38min';
		// this.description = 'Maecenas nisl nisi, euismod ut nibh sit amet, molestie maximus felis. Morbi a auctor sapien, ac pretium orci.';
	}

	@Input('init') public myCurseList: Item;
	@Output('change') public counterChange = new EventEmitter();

	public deleteCourse(id: number) {
		this.counterChange.emit({
			value: id
		})
	}
}

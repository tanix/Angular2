import { Component, ViewEncapsulation, Input } from '@angular/core';


@Component({
	selector: 'course-description',
	templateUrl: 'course-description.component.html',
	styles: [require('./course-description.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CourseDescriptionComponent {

	constructor() {
	}

}

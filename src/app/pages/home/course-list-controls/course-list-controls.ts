import { Component, ViewEncapsulation, Input } from '@angular/core';


@Component({
	selector: 'course-controls',
	templateUrl: 'course-list-controls.html',
	styles: [require('./course-list-controls.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CourseControlsComponent {

	constructor() {
	}

}

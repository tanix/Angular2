import { Component, OnInit, OnDestroy } from '@angular/core';
import { authorizationService } from '../../core/services';

import { Course } from '../../core/interfaces/course/course.interface';
import { validateEmail } from '../../core/validators/email.validator';

@Component({
	selector: 'add-edit-course',
	providers: [Location],
	styles: [require('./add-edit-course.styles.scss')],
	template: require('./add-edit-course.template.html')
})


export class NewCourseComponent implements OnInit, OnDestroy {
	public title: string = "";
	public description: string = "";
	public date: Date;
	public duration: number;
	public authors: any;

	submitted = false;
	model = new Course(this.title, this.description, this.date, this.duration, this.authors);

	constructor(public authorizationService: authorizationService) {
		console.log('Login page: constructor');
	}

	public ngOnInit() {
		console.log('Login page: ngOnInit');
	}

	public onSubmit() {
		this.submitted = true;
	}

	public cancel($event) {
		$event.preventDefault();
	}

	public ngOnDestroy() {
		console.log('Login page: ngOnDestroy');
	}

}

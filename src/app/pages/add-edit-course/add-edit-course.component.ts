import { Component, OnInit, OnDestroy } from '@angular/core';
import { authorizationService } from '../../core/services';

import { Course } from '../../core/interfaces/course/course.interface';

@Component({
	selector: 'add-edit-course',
	providers: [Location],
	styles: [require('./add-edit-course.styles.scss')],
	template: require('./add-edit-course.template.html')
})


export class NewCourseComponent implements OnInit, OnDestroy {
	public hasError: boolean = false;
	public hasSuccess: boolean = false;

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

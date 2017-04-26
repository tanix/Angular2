import { Component, OnInit, OnDestroy } from '@angular/core';
import { authorizationService } from '../../core/services';

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
	public authors: string = "";

	constructor(public authorizationService: authorizationService) {
		console.log('Login page: constructor');
	}

	public ngOnInit() {
		console.log('Login page: ngOnInit');
	}

	public save($event) {
		$event.preventDefault();
	}

	public cancel($event) {
		$event.preventDefault();
	}

	public ngOnDestroy() {
		console.log('Login page: ngOnDestroy');
	}

}

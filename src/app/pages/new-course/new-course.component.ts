import { Component, OnInit, OnDestroy } from '@angular/core';
import { authorizationService } from '../../core/services';

@Component({
	selector: 'new-course',
	providers: [Location],
	styles: [require('./new-course.styles.scss')],
	template: require('./new-course.template.html')
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

	public ngOnDestroy() {
		console.log('Login page: ngOnDestroy');
	}

	public save($event) {
		$event.preventDefault();
	}


	public cancel($event) {
		$event.preventDefault();
	}

}

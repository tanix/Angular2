import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { coursesService } from '../../core/services';

@Component({
	selector: 'home',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./home.styles.scss')],
	template: require('./home.template.html')
})

export class HomeComponent implements OnInit, OnDestroy {
	private isLoading: boolean = true;
	public courseList: Array<any>;

	constructor(public coursesService: coursesService) {
		console.log('Home page constructor');
		this.courseList = [];
	}

	public ngOnInit() {
		console.log('Home page init');

		this.isLoading = false;
		this.courseList = this.coursesService.getCourses();
	}

	public ngOnDestroy() {
		console.log('Home page ngOnDestroy');
	}

	public deleteCourseItem($event) {
		console.log($event);
	}
}

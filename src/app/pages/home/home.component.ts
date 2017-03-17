import { Component, ViewEncapsulation, AfterContentChecked, OnInit, OnDestroy } from '@angular/core';
import { coursesService } from '../../core/services';

@Component({
	selector: 'home',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./home.styles.scss')],
	template: require('./home.template.html')
})

export class HomeComponent implements OnInit, AfterContentChecked, OnDestroy {
	private isLoading: boolean = true;
	private isLogined: boolean = false;
	private courseItemId: number;
	public courseList: Array<any>;

	constructor(public coursesService: coursesService) {
		console.log('Home page constructor');
		this.courseList = [];
	}

	public ngOnInit() {
		console.log('Home page init');

		this.isLoading = false;
		this.isLogined = true;
		this.courseList = this.coursesService.getList();
	}

	public ngOnDestroy() {
		console.log('Home page ngOnDestroy');
	}

	public ngAfterContentChecked() {
		console.log('Home page ngAfterContentChecked');
	}

	public deleteCourseItem($event) {

		this.courseItemId = $event.CourseId;
		this.getCourseItemById(this.courseItemId);
	}

	public deleteCourseItemAction($event) {

		if($event.delete && this.courseItemId) {
			this.coursesService.removeItem(this.courseItemId);
		}
	}

	public getCourseItemById(id: number) {
		console.log(this.coursesService.getItemById(id));
	}
}

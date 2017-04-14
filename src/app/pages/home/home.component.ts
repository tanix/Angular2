import { Component, ViewEncapsulation, OnInit, OnDestroy, NgZone } from '@angular/core';
import { HttpModule } from '@angular/http';
import { coursesService } from '../../core/services/courses/courses.service';
import { Course } from './../../core/interfaces/courses/courses.interface'

@Component({
	selector: 'home',
	encapsulation: ViewEncapsulation.None,
	providers: [coursesService, HttpModule],
	styles: [require('./home.styles.scss')],
	template: require('./home.template.html')
})

export class HomeComponent implements OnInit, OnDestroy {
	private isLoading: boolean = true;
	private isSpinner: boolean = false;
	private courseItemId: number;
	//public courseList: Array<any>;
	public deletedItem = { };

	public courseQuery: string = '';
	private courses:Course[];


	constructor(public coursesService: coursesService, private _ngZone: NgZone) {
		console.log('Home page: constructor');
		//this.courseList = [];
	}

	public ngOnInit() {
		console.log('Home page: ngOnInit');

		this.isLoading = false;
		this.coursesService.getList().subscribe(courses => {
			this.courses = courses.sort((a: any, b: any) => {
				let aDate = Number(new Date(a.createDate));
				let bDate = Number(new Date(b.createDate));
				return bDate - aDate;
			});
		});
	}


	public ngOnDestroy() {
		console.log('Home page: ngOnDestroy');
	}

	public deleteCourseItem($event) {
		this.courseItemId = $event.CourseId;
		//this.deletedItem = this.getCourseItemById($event.CourseId);

		this._ngZone.onUnstable.subscribe(() => {
			console.log('unstable');
		});

		setTimeout(() => console.log('timeout handler'), 1000);

		this._ngZone.onStable.subscribe(() => {
			console.log('stable');
		});
	}

	public deleteCourseItemAction($event) {
		if($event.delete && this.courseItemId) {
			//this.coursesService.removeItem(this.courseItemId);
		}
	}

	public getCourseItemById(id: number) {
		//return this.coursesService.getItemById(id);
	}

	public filterCourseQuery($event) {
		this.courseQuery = $event.courseQuery;
	}
}

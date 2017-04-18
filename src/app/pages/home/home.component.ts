import { Component, ViewEncapsulation, OnInit, OnDestroy, NgZone } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import { coursesService } from '../../core/services/courses/courses.service';
import { Course } from './../../core/interfaces/courses/courses.interface';

@Component({
	selector: 'home',
	encapsulation: ViewEncapsulation.None,
	providers: [coursesService, HttpModule],
	styles: [require('./home.styles.scss')],
	template: require('./home.template.html')
})

export class HomeComponent implements OnInit, OnDestroy {
	private isLoading: boolean = true;
	private isLoader: boolean = false;
	private courseItemId: number;
	public courseQuery: string = '';

	private courses=[];
	course: Course;

	private subscription: Subscription = new Subscription();


	constructor(public coursesService: coursesService, private _ngZone: NgZone) {
		console.log('Home page: constructor');
	}

	public ngOnInit() {
		console.log('Home page: ngOnInit');
		this.getAllCourses();
		this.isLoading = false;
	}

	public ngOnDestroy() {
		console.log('Home page: ngOnDestroy');
		this.subscription.unsubscribe();
	}

	public getAllCourses() {
		let today = new Date();
		let lastTwoWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14);

		this.subscription = this.coursesService.getList()
			.concatMap(data => Observable.from(data))
			.filter(course => new Date(course.createDate) > lastTwoWeek )
			.subscribe((data) => {
				this.courses.push(data);
				this.courses.sort((a: any, b: any) => {
					let aDate = Number(new Date(a.createDate));
					let bDate = Number(new Date(b.createDate));
					return aDate- bDate;
				});
			});
	}

	public deleteCourseItem($event) {
		this.courseItemId = $event.CourseId;
		this.coursesService.getItemById(this.courseItemId).subscribe((course) => {
			this.course = course;
		});

		this._ngZone.onUnstable.subscribe(() => {
			//console.log('unstable');
		});

		//setTimeout(() => console.log('timeout handler'), 1000);

		this._ngZone.onStable.subscribe(() => {
			//console.log('stable');
		});
	}

	public deleteCourseItemAction($event) {
		this.isLoader = true;

		if($event.delete && this.courseItemId) {
			this.coursesService.removeItem(this.courseItemId).subscribe(() => {
				//this.isLoader = false;
				setTimeout(() => { this.isLoader = false;}, 100);
			});
		}

		for (let course of this.courses) {
			if(this.courseItemId === course.id) {
				this.courses.splice(this.courses.indexOf(course), 1);
			}
		}

	}

	public filterCourseQuery($event) {
		this.courseQuery = $event.courseQuery;
	}
}

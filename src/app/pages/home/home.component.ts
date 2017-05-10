import { Component, ViewEncapsulation, OnInit, OnDestroy, NgZone } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import { coursesService } from '../../core/services/courses/courses.service';
import { myLoaderService } from '../../core/services';

import { Course } from './../../core/interfaces/courses/courses.interface';
import { orderByDatePipe }  from '../../core/pipes/orderPipe.pipe';

@Component({
	selector: 'home',
	encapsulation: ViewEncapsulation.None,
	providers: [coursesService, HttpModule],
	styles: [require('./home.styles.scss')],
	template: require('./home.template.html'),
})

export class HomeComponent implements OnInit, OnDestroy {
	private isLoading: boolean = true;
	private isLoader: boolean = false;
	private courseItemId: number;
	public courseQuery: string;

	public courses=[];
	course: Course;

	private subscription: Subscription = new Subscription();
	private subscriptionLoader: Subscription = new Subscription();

	private startPasition: number;
	private endPasition: number;

	constructor(public coursesService: coursesService, private _ngZone: NgZone, private orderPipe: orderByDatePipe, public myLoaderService: myLoaderService) {
		console.log('Home page: constructor');

		this.startPasition = 0;
		this.endPasition = 10;
		this.courseQuery = '';
	}

	public ngOnInit() {
		console.log('Home page: ngOnInit');
		this.getAllCourses();
		this.isLoading = false;
	}

	public getAllCourses() {
		let today = new Date();
		let lastTwoWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14);

		this.subscription = this.coursesService.getList(this.startPasition, this.endPasition)
		//this.subscription = this.coursesService.getList(this.startPasition, this.endPasition, this.courseQuery)
			.concatMap(data => Observable.from(data))
			.filter(course => new Date(course.date) > lastTwoWeek )
			.subscribe((data) => {
				//this.courses.splice(0, this.courses.length);
				this.courses.push(data);
				this.orderPipe.transform(this.courses);
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
		this.myLoaderService.showLoader();

		this.subscriptionLoader = this.myLoaderService.subject.subscribe({
			next: (data) => {
				this.isLoader = data.isLoader;
				console.log('Loader. BehaviorSubject: ' + data.isLoader)
			}
		});

		if($event.delete && this.courseItemId) {
			this.coursesService.removeItem(this.courseItemId).subscribe(() => {
				setTimeout(() => {
					this.myLoaderService.hideLoader();

					this.subscriptionLoader = this.myLoaderService.subject.subscribe({
						next: (data) => {
							this.isLoader = data.isLoader;
							console.log('Loader. BehaviorSubject: ' + data.isLoader)
						}
					});

				}, 100);
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
		//this.getAllCourses();
	}

	public addMoreCourses() {
		this.endPasition = this.endPasition + 5;
		this.getAllCourses();
	}

	public ngOnDestroy() {
		console.log('Home page: ngOnDestroy');
		this.subscription.unsubscribe();
		this.subscriptionLoader.unsubscribe();
	}
}

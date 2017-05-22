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
	private isLoader: boolean = false;
	private courseItemId: number;
	public courseQuery: string;

	public courses=[];
	course: Course;

	private subscription: Subscription = new Subscription();
	private subscriptionLoader: Subscription = new Subscription();

	private startPasition: number;
	private endPasition: number;

	private today = new Date();
	private lastTwoWeek = new Date();

	constructor(public coursesService: coursesService, private _ngZone: NgZone, private orderPipe: orderByDatePipe, public myLoaderService: myLoaderService) {
		console.log('Home page: constructor');

		this.startPasition = 0;
		this.endPasition = 10;
		this.courseQuery = "";
	}

	public ngOnInit() {
		console.log('Home page: ngOnInit');

		this.lastTwoWeek = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 14);
		this.subscriptionOnAllCourses();
		this.getLoader();
	}

	public subscriptionOnAllCourses() {

		this.subscription = this.coursesService.getList(this.startPasition, this.endPasition)
			.concatMap(data => Observable.from(data))
			/*.filter(course => new Date(course.date) > lastTwoWeek )*/
			.subscribe((data) => {
				if(data) {
					this.courses.push(data);
					this.orderPipe.transform(this.courses);
				}
			});
	}

	public deleteCourseItem($event) {
		this.courseItemId = $event.CourseId;
		this.coursesService.getCourseById(this.courseItemId).subscribe((course) => {
			this.course = course;
		});
	}

	public deleteCourseItemAction($event) {

		this.myLoaderService.showLoader();

		if($event.delete && this.courseItemId) {
			this.coursesService.removeItem(this.courseItemId).subscribe(() => {
				this.myLoaderService.hideLoader();
			});
		}

		for (let course of this.courses) {
			if(this.courseItemId === course.id) {
				this.courses.splice(this.courses.indexOf(course), 1);
			}
		}
	}

	public filterCourseQuery($event) {
		this.courseQuery =$event.courseQuery;
		this.courses = [];

		if(this.courseQuery !== "" || this.courseQuery !== undefined) {
			this.coursesService.getListByQuery(this.startPasition, this.endPasition, this.courseQuery)
				.concatMap(data => Observable.from(data))
				/*.filter(course => new Date(course.date) > lastTwoWeek )*/
				.subscribe((data) => {
					if(data) {
						this.courses.push(data);
						this.orderPipe.transform(this.courses);
					}
				});
		}
	}

	public addMoreCourses() {
		this.startPasition = this.endPasition;
		this.endPasition = this.startPasition + 5;

		this.coursesService.getList(this.startPasition, this.endPasition)
			.concatMap(data => Observable.from(data))
			/*.filter(course => new Date(course.date) > lastTwoWeek )*/
			.subscribe((data) => {
				if(data) {
					this.courses.push(data);
					this.orderPipe.transform(this.courses);
				}
			});
	}

	public getLoader() {
		this.subscriptionLoader = this.myLoaderService.subject.subscribe((data) => {
			this.isLoader = data.isLoader;
			console.log('Loader. BehaviorSubject: ' + data.isLoader);
		});
	}

	public ngOnDestroy() {
		console.log('Home page: ngOnDestroy');
		this.subscription.unsubscribe();
		this.subscriptionLoader.unsubscribe();
	}
}

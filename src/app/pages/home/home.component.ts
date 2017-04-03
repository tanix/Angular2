import { Component, ViewEncapsulation, OnInit, AfterContentInit, OnDestroy, NgZone } from '@angular/core';
import { coursesService, myLoaderService } from '../../core/services';


@Component({
	selector: 'home',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./home.styles.scss')],
	template: require('./home.template.html')
})

export class HomeComponent implements OnInit, AfterContentInit, OnDestroy {
	private isLoading: boolean = true;
	private isSpinner: boolean = false;
	private courseItemId: number;
	public courseList: Array<any>;
	public deletedItem = { };

	public courseQuery: string = '';


	constructor(public coursesService: coursesService, private _ngZone: NgZone, private _myLoaderService: myLoaderService) {
		console.log('Home page: constructor');
		this.courseList = [];

	}

	public ngOnInit() {
		console.log('Home page: ngOnInit');

		this.isLoading = false;
		this.courseList = this.coursesService.getList();
	}

	public ngAfterContentInit() {
		this.checkTopRated();
	}

	public ngOnDestroy() {
		console.log('Home page: ngOnDestroy');
	}

	public deleteCourseItem($event) {
		this.courseItemId = $event.CourseId;
		this.deletedItem = this.getCourseItemById($event.CourseId);

		this._ngZone.onUnstable.subscribe(() => {
			console.log('unstable');
		});

		setTimeout(() => console.log('timeout handler'), 1000);

		this._ngZone.onStable.subscribe(() => {
			console.log('stable');
		});
	}

	public deleteCourseItemAction($event) {

		this._ngZone.runOutsideAngular(() => {
			this.isSpinner = this._myLoaderService.showLoader();
		});

		if($event.delete && this.courseItemId) {
			setTimeout(() => console.log('timeout handler'), 5000);
			this.coursesService.removeItem(this.courseItemId);
		}

		this._ngZone.runOutsideAngular(() => {
			this.isSpinner = this._myLoaderService.hideLoader();
		});
	}

	public getCourseItemById(id: number) {
		return this.coursesService.getItemById(id);
	}

	public checkTopRated() {
		// for (let index of this.courseList) {
		// 	this.courseList[index].push({ 'topRated' : true});
		//
		// }
		// console.log(this.courseList);
	}

	public filterCourseQuery($event) {
		this.courseQuery = $event.courseQuery;
	}

	onStable() {
	}
}

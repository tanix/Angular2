import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { authorsService } from '../../core/services';
import { routeParamsService } from '../../core/services';
import { Observable } from "rxjs/Observable";

import { Course } from '../../core/interfaces/course/course.interface';
import { ActivatedRoute, Router} from '@angular/router';

import { coursesService } from '../../core/services/courses/courses.service';

@Component({
	selector: 'add-edit-course',
	providers: [],
	styles: [require('./add-edit-course.styles.scss')],
	template: require('./add-edit-course.template.html')
})

export class NewCourseComponent implements OnInit, OnDestroy {
	public title: string = "";
	public description: string = "";
	public date: Date;
	public duration: number;
	public authors = [];

	submitted = false;
	model = new Course(this.title, this.description, this.date, this.duration, this.authors);

	public subscriptionId: Subscription = new Subscription();
	public subscription: Subscription = new Subscription();

	public authorsObj : any;
	public id: number;

	constructor(public authorsService: authorsService, private route: ActivatedRoute, private router: Router,
			public routeID: routeParamsService,	public coursesService: coursesService) {
			console.log('Course page: constructor');
	}

	public ngOnInit() {
		console.log('Course page: ngOnInit');

		this.authorsObj = this.authorsService.getAuthors();

		for (let author of this.authorsObj) {
			this.authors.push(author);
		}

		this.subscriptionId = this.route.params.map(params => params['id'])
			.subscribe((id) => {
				if(id) {
					this.id = +id;
				} else {
					this.id = 0;
				}

				this.routeID.setRouteId(this.id);
		});

		this.subscription = this.coursesService.getCourseById(this.id)
			.subscribe((data) => {
				this.authors.length = 0;

				for (let author of data.authors) {
					this.authors.push(author);
				}

				this.model = new Course(data.title, data.description, data.date, +data.duration, this.authors);
			});
	}

	public onSubmit() {
		this.submitted = true;

		if(this.id) {
			this.subscription = this.coursesService.updateCourse(this.id, this.model).subscribe((data) => {
				this.router.navigate(['/courses']);
			});

		} else {
			this.subscription = this.coursesService.createCourse(this.model).subscribe((data) => {
				this.router.navigate(['/courses']);
			});
		}
	}

	public cancel($event) {
		this.router.navigate(['/courses']);
	}

	public ngOnDestroy() {
		console.log('Course page: ngOnDestroy');
		this.subscriptionId.unsubscribe();
		this.subscription.unsubscribe();
		this.routeID.resetRouteId();
	}

}

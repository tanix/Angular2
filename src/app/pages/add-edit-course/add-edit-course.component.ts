import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { authorsService } from '../../core/services';
import { routeParamsService } from '../../core/services';

import { Course } from '../../core/interfaces/course/course.interface';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
	selector: 'add-edit-course',
	providers: [Location],
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

	public authorsObj : any;

	constructor(public authorsService: authorsService, private route: ActivatedRoute, private router: Router, public routeID: routeParamsService) {
		console.log('Course page: constructor');
	}

	public ngOnInit() {
		console.log('Course page: ngOnInit');

		this.authorsObj = this.authorsService.getAuthors();

		for (let course of this.authorsObj) {
			this.authors.push(course.name);
		}

		this.subscriptionId = this.route.params.map(params => params['id'])
			.subscribe((id) => {
				console.log("ID:", id);
				this.routeID.setRouteId(id);
		});
	}

	public onSubmit() {
		this.submitted = true;
		alert(this.model.date);
	}

	public cancel() {
		this.router.navigate(['/courses']);
	}

	public ngOnDestroy() {
		console.log('Course page: ngOnDestroy');
		this.subscriptionId.unsubscribe();
	}

}

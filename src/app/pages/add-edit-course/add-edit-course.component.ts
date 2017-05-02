import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';
import { authorsService } from '../../core/services';

import { Course } from '../../core/interfaces/course/course.interface';

import { FormGroup, FormBuilder } from '@angular/forms';


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
	private subscription: Subscription = new Subscription();

	public authorsObj : any;


	constructor(public authorsService: authorsService) {
		console.log('Course page: constructor');
	}

	public ngOnInit() {
		console.log('Course page: ngOnInit');

		this.authorsObj = this.authorsService.getAuthors();

		for (let course of this.authorsObj) {
			this.authors.push(course.name);
		}
	}

	public onSubmit() {
		this.submitted = true;
		alert(this.model.date);
	}

	public cancel($event) {
		$event.preventDefault();
	}

	public ngOnDestroy() {
		console.log('Course page: ngOnDestroy');
		this.subscription.unsubscribe();
	}

}

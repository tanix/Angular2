import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { NewCourseComponent } from '../../../pages/add-edit-course';

@Injectable()
export class canDeactivateGuard implements CanDeactivate<Observable<boolean>> {
	constructor() {	 console.log("canActivateGuard called"); }

	canDeactivate(course: NewCourseComponent) {
		console.log("canActivate method called");
		return Observable.of(course.canLeave);
	}

}

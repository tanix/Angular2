import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { routes } from './add-edit-course.routes';

import { NewCourseComponent } from './add-edit-course.component';
import { durationComponent } from '../../core/components/duration/duration.component';
import { authorsComponent }   from '../../core/components/authors/authors.component';
import { dateComponent }   from '../../core/components/date/date.component';

import { durationModule }  from '../../core/pipes/duration.module';

import { authorsService } from '../../core/services';

import { NumberValidator } from '../../core/diractives/number.validator.deractives';
import { DateValidator } from '../../core/diractives/date.validator.diractives';


@NgModule({
	declarations: [
		NewCourseComponent,
		durationComponent,
		NumberValidator,
		DateValidator,
		authorsComponent,
		dateComponent
		],
	imports: [
		routes,
		CommonModule,
		durationModule,
		FormsModule
	],
	providers: [authorsService]
})
export class NewCourseModule {
	constructor() {
	}
}

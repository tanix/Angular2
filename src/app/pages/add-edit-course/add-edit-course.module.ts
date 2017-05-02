// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './add-edit-course.routes';

// custom components
import { NewCourseComponent } from './add-edit-course.component';
import { authorsService } from '../../core/services';
import { durationComponent } from '../../core/components/duration/duration.component';

import { durationModule }  from '../../core/pipes/duration.module';
import { FormsModule } from '@angular/forms';

import { NumberValidator } from '../../core/diractives/number.validator.deractives';
import { DateValidator } from '../../core/diractives/date.validator.diractives';

import { authorsComponent }   from '../../core/components/authors/authors.component';

@NgModule({
	declarations: [
		NewCourseComponent,
		durationComponent,
		NumberValidator,
		DateValidator,
		authorsComponent
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

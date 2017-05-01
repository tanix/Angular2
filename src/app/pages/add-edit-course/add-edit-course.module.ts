// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './add-edit-course.routes';

// custom components
import { NewCourseComponent } from './add-edit-course.component';
import { authorizationService } from '../../core/services';
import { durationComponent } from '../../core/components/duration/duration.component';
import { authorsComponent } from '../../core/components/authors/authors.component';
import { durationModule }  from '../../core/pipes/duration.module';
import { FormsModule } from '@angular/forms';

import { NumberValidator } from '../../core/diractives/number.validator.deractives';
import { DateValidator } from '../../core/diractives/date.validator.diractives';

@NgModule({
	declarations: [
		NewCourseComponent,
		durationComponent,
		authorsComponent,
		NumberValidator,
		DateValidator
		],
	imports: [
		routes,
		CommonModule,
		durationModule,
		FormsModule
	],
	providers: [authorizationService]
})
export class NewCourseModule {
	constructor() {
	}
}

// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './new-course.routes';

// custom components
import { NewCourseComponent } from './new-course.component';
import { authorizationService } from '../../core/services';
import { datapickerComponent } from '../../core/components/datapicker/datapicker.component';
import { durationComponent } from '../../core/components/duration/duration.component';
import { authorsComponent } from '../../core/components/authors/authors.component';


@NgModule({
	declarations: [
		NewCourseComponent,
		datapickerComponent,
		durationComponent,
		authorsComponent,
		],
	imports: [
		routes,
		CommonModule
	],
	providers: [authorizationService]
})
export class NewCourseModule {
	constructor() {
	}
}

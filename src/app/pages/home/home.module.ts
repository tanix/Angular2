// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './home.routes';

// custom components
import { HomeComponent } from './home.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseControlPanelComponent } from './course-control-panel/course-control-panel.component';
import { coursesService } from '../../core/services';

import { ModalComponent } from '../../core/components/modal/modal.component';
import { HighlightDirective } from '../../core/diractives/highlight.directive';
import { sortByCreatedDatePipe }  from '../../core/pipes/date.pipe';
import { durationPipe }  from '../../core/pipes/duration.pipe';


@NgModule({
	declarations: [
		HomeComponent,
		CourseItemComponent,
		CourseControlPanelComponent,
		ModalComponent,
		HighlightDirective,
		sortByCreatedDatePipe,
		durationPipe],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	providers: [coursesService]
})
export class HomeModule {
	constructor() {
	}
}

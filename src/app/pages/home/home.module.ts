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
import { coursesService, myLoaderService } from '../../core/services';

import { ModalComponent } from '../../core/components/modal/modal.component';
import { HighlightDirective } from '../../core/diractives/highlight.directive';

import { sortByInputPipe }  from '../../core/pipes/input.pipe';
import { LoaderModule } from '../../core/components/loader/loader.module';
import { durationModule }  from '../../core/pipes/duration.module';

@NgModule({
	declarations: [
		HomeComponent,
		CourseItemComponent,
		CourseControlPanelComponent,
		HighlightDirective,

		sortByInputPipe,
		ModalComponent
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		LoaderModule,
		durationModule
	],
	providers: [coursesService, myLoaderService]
})
export class HomeModule {
	constructor() {
	}
}

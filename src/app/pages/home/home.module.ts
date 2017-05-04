import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { routes } from './home.routes';

import { HomeComponent } from './home.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseControlPanelComponent } from './course-control-panel/course-control-panel.component';
import { ModalComponent } from '../../core/components/modal/modal.component';

import { LoaderModule } from '../../core/components/loader/loader.module';
import { durationModule }  from '../../core/pipes/duration.module';

import { coursesService, myLoaderService } from '../../core/services';

import { HighlightDirective } from '../../core/diractives/highlight.directive';
import { sortByInputPipe }  from '../../core/pipes/input.pipe';
import { orderByDatePipe }  from '../../core/pipes/orderPipe.pipe';



@NgModule({
	declarations: [
		HomeComponent,
		CourseItemComponent,
		CourseControlPanelComponent,
		HighlightDirective,
		sortByInputPipe,
		orderByDatePipe,
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
	providers: [coursesService, myLoaderService, orderByDatePipe]
})
export class HomeModule {
	constructor() {
	}
}

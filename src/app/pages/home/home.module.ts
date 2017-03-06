// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './home.routes';

// custom components
import { HomeComponent } from './home.component';
import { CourseComponent } from './course-item/course-item.component';
import { CourseControlsComponent } from './course-controls/course-controls.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseBrefComponent } from './course-bref/course-bref.component';
import { CourseControlPanelComponent } from './course-control-panel/course-control-panel.component';

@NgModule({
	declarations: [
		HomeComponent,
		CourseComponent,
		CourseControlsComponent,
		CourseDescriptionComponent,
		CourseBrefComponent,
		CourseControlPanelComponent
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	providers: []
})
export class HomeModule {
	constructor() {
	}
}

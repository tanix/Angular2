// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './home.routes';

// custom components
import { HomeComponent } from './home.component';
import { CourseComponent } from './course-item/course-item.component';
import { CourseControlPanelComponent } from './course-control-panel/course-control-panel.component';

@NgModule({
	declarations: [
		HomeComponent,
		CourseComponent,
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

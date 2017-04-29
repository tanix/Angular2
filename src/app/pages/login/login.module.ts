// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './login.routes';

// custom components
import { LoginComponent } from './login.component';
import { authorizationService } from '../../core/services';
import { LoaderModule } from '../../core/components/loader/loader.module';

import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		LoginComponent ],
	imports: [
		routes,
		CommonModule,
		LoaderModule,
		FormsModule
	],
	providers: [authorizationService]
})
export class LoginModule {
	constructor() {
	}
}

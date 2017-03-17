// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './home.routes';

// custom components
import { LoginComponent } from './login.component';
import { authorizationService } from '../../core/services';

@NgModule({
	declarations: [
		LoginComponent ],
	imports: [
		routes,
		CommonModule
	],
	providers: [authorizationService]
})
export class LoginModule {
	constructor() {
	}
}

// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './login.routes';

// custom components
import { LoginComponent } from './login.component';
import { authorizationService } from '../../core/services';
import { LoaderModule } from '../../core/components/loader/loader.module';

@NgModule({
	declarations: [
		LoginComponent ],
	imports: [
		routes,
		CommonModule,
		LoaderModule
	],
	providers: [authorizationService]
})
export class LoginModule {
	constructor() {
	}
}

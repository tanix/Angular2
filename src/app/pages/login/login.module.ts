import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routes } from './login.routes';

import { LoginComponent } from './login.component';

import { LoaderModule } from '../../core/components/loader/loader.module';

import { authorizationService } from '../../core/services';

import { EmailValidator } from '../../core/diractives/email.validator.diractives';

@NgModule({
	declarations: [
		LoginComponent,
		EmailValidator ],
	imports: [
		routes,
		CommonModule,
		LoaderModule,
		FormsModule
	],
	providers: [ authorizationService ]
})
export class LoginModule {
	constructor() {
	}
}

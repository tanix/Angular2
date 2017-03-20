import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

import { authorizationService } from '../../services';
import { LoginComponent } from '../login/login.component';

@NgModule({
	declarations: [HeaderComponent, LoginComponent],
	imports: [RouterModule, CommonModule],
	exports: [HeaderComponent],
	providers: [authorizationService]
})
export class HeaderModule {
	constructor() {
	}
}

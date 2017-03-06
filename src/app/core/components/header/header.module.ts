import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';

@NgModule({
	declarations: [HeaderComponent, LoginComponent],
	imports: [RouterModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
	constructor() {
	}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

import { LoginHeaderComponent } from '../login/login.component';

@NgModule({
	declarations: [HeaderComponent, LoginHeaderComponent],
	imports: [RouterModule, CommonModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
	constructor() {
	}
}

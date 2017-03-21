import { Component, ViewEncapsulation } from '@angular/core';
import { authorizationService } from '../../services';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html',
	styles: [require('./login.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
	private isLogined: boolean = false;

	constructor(public authorizationService: authorizationService) {

		this.isLogined = this.authorizationService.isAuthenticated();
	}

	public logOff() {

	}
}

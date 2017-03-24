import { Component, ViewEncapsulation } from '@angular/core';
import { authorizationService } from '../../services';

@Component({
	selector: 'login-header',
	templateUrl: 'login.component.html',
	styles: [require('./login.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class LoginHeaderComponent {
	private isLogined: boolean = false;
	private userInfo : string;

	constructor(public authorizationService: authorizationService) {
		this.isLogined = this.authorizationService.isAuthenticated();
		this.userInfo = this.authorizationService.getUserInfo();
	}

	public logOut() {
		this.authorizationService.logOut();
		this.isLogined = this.authorizationService.isAuthenticated();
	}
}

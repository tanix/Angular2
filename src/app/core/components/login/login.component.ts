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
	private userName : string;

	constructor(public authorizationService: authorizationService) {

		this.isLogined = this.authorizationService.isAuthenticated();
		console.log("==== ============");
		console.log(this.isLogined);
		this.userName = this.authorizationService.getUserInfo();
	}

	public logOut($event) {
		this.authorizationService.logOut();
		this.isLogined = this.authorizationService.isAuthenticated();
	}
}

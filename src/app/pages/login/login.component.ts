import { Component, OnInit, OnDestroy } from '@angular/core';
import { authorizationService } from '../../core/services';

@Component({
	selector: 'login',
	providers: [Location],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})


export class LoginComponent implements OnInit, OnDestroy {
	public email: string;
	private password: string;
	public hasError: boolean = false;
	public hasSuccess: boolean = false;

	constructor(public authorizationService: authorizationService) {
		console.log('Login page constructor');
	}

	public ngOnInit() {
		console.log('Login page init');
	}

	public ngOnDestroy() {
		console.log('Login page ngOnDestroy');
	}

	public login(event) {

		if (!this.email || !this.password) {

			this.hasError = true;
			event.preventDefault();

		} else {

			this.hasError = false;
			this.hasSuccess = true;
			this.authorizationService.login(this.email, this.password);
			window.location.href = '#/';
		}


	}
}

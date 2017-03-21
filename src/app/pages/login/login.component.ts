import { Component, OnInit, OnDestroy } from '@angular/core';
import { authorizationService } from '../../core/services';

@Component({
	selector: 'login',
	providers: [Location],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})


export class LoginComponent implements OnInit, OnDestroy {

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
		this.authorizationService.login();
		window.location.href = '#/';
	}
}

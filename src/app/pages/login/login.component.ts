import { Component, OnInit, OnDestroy } from '@angular/core';
import { authorizationService } from '../../core/services';

@Component({
	selector: 'login',
	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})

export class LoginComponent implements OnInit, OnDestroy {
	private isLogined: boolean = false;

	constructor(public authorizationService: authorizationService) {
		console.log('Login page constructor');
	}

	public ngOnInit() {
		console.log('Login page init');
		this.isLogined = false;
		this.authorizationService.login();
	}

	public ngOnDestroy() {
		console.log('Login page ngOnDestroy');
	}

}

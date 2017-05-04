import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Login } from '../../core/interfaces/login/login.interface';

import { authorizationService } from '../../core/services';
import { myLoaderService } from '../../core/services';

@Component({
	selector: 'login',
	providers: [Location],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})


export class LoginComponent implements OnInit, OnDestroy {
	private isLoader: boolean = false;
	public email: string;
	private password: string;

	private subscription: Subscription = new Subscription();
	private subscriptionLogin: Subscription = new Subscription();

	submitted = false;
	model = new Login(this.email, this.password);

	constructor(public authorizationService: authorizationService, public myLoaderService: myLoaderService) {
		console.log('Login page: constructor');
	}

	public ngOnInit() {
		console.log('Login page: ngOnInit');
	}

	public onSubmit() {
		this.submitted = true;

		this.myLoaderService.showLoader();
		this.subscription = this.myLoaderService.subject.subscribe({
			next: (data) => {
				this.isLoader = data.isLoader;
				console.log('Loader. BehaviorSubject: ' + data.isLoader)
			}
		});

		this.subscriptionLogin  = this.authorizationService.login(this.email, this.password).subscribe((data) => data);

		this.myLoaderService.hideLoader();
		this.subscription = this.myLoaderService.subject.subscribe({
			next: (data) => {
				this.isLoader = data.isLoader;
				console.log('Loader. BehaviorSubject: ' + data.isLoader)
			}
		});
	}

	public ngOnDestroy() {
		console.log('Login page: ngOnDestroy');

		this.subscription.unsubscribe();
		this.subscriptionLogin.unsubscribe();
	}
}

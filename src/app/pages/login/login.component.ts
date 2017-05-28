import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";

import { Login } from '../../core/interfaces/login/login.interface';

import { authorizationService } from '../../core/services';
import { myLoaderService } from '../../core/services';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { USER_SIGN_IN } from '../../core/reducers/authorization';

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
	private subscriptionGetUserInfo: Subscription = new Subscription();
	private subscriptionAuthorization: Subscription = new Subscription();

	submitted = false;
	model = new Login(this.email, this.password);

	constructor(public authorizationService: authorizationService, public myLoaderService: myLoaderService, public router: Router, public store: Store<>) {
		console.log('Login page: constructor');
	}

	public ngOnInit() {
		console.log('Login page: ngOnInit');
		this.getLoader();
	}

	public onSubmit() {
		this.submitted = true;
		this.myLoaderService.showLoader();

		this.subscriptionGetUserInfo  = this.authorizationService.getUserInfo(this.model.email, this.model.password)
			.subscribe((data) => {
				if(data.length > 0) {
					this.store.dispatch({ type: USER_SIGN_IN,  payload: { email: data[0].email, password: data[0].password, token: data[0].token }});

					this.subscriptionAuthorization = this.authorizationService.isAuthenticated(data).subscribe((token) => {
						if(token) {
							this.myLoaderService.hideLoader();
							this.router.navigate(['/courses']);
						}
					});

				} else {
					this.store.dispatch({ type: USER_SIGN_IN,  payload: { email: this.model.email, password: this.model.password, token: this.model.email + this.model.password }});

					this.subscriptionLogin  = this.authorizationService.login().subscribe((data) => {
						this.myLoaderService.hideLoader();
						this.router.navigate(['/courses']);
					});
				}
		});
	}

	public getLoader() {
		this.subscription = this.myLoaderService.subject.subscribe((data) => {
			this.isLoader = data.isLoader;
			console.log('Loader. BehaviorSubject: ' + data.isLoader);
		});
	}

	public ngOnDestroy() {
		console.log('Login page: ngOnDestroy');

		this.subscription.unsubscribe();
		this.subscriptionGetUserInfo.unsubscribe();
		this.subscriptionAuthorization.unsubscribe();
		this.subscriptionLogin.unsubscribe();
	}
}

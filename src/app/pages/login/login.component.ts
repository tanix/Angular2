import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Login } from '../../core/interfaces/login/login.interface';

import { authorizationService } from '../../core/services';
import { myLoaderService } from '../../core/services';

import { Router, ActivatedRoute, Params } from '@angular/router';

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

	constructor(public authorizationService: authorizationService, public myLoaderService: myLoaderService, public router: Router) {
		console.log('Login page: constructor');
	}

	public ngOnInit() {
		console.log('Login page: ngOnInit');
		this.getLoader();
	}

	public onSubmit() {
		this.submitted = true;

		this.myLoaderService.showLoader();

		this.subscriptionLogin  = this.authorizationService.login(this.model.email, this.model.password).subscribe((data) => {
			console.log(data);
			this.myLoaderService.hideLoader();
			this.router.navigate(['/courses']);
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
		this.subscriptionLogin.unsubscribe();
	}
}

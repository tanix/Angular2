import { Component, OnInit, OnDestroy } from '@angular/core';
import { authorizationService } from '../../core/services';
import { myLoaderService } from '../../core/services';
import { Subscription } from 'rxjs/Subscription';

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
	public hasError: boolean = false;
	public hasSuccess: boolean = false;

	private subscription: Subscription = new Subscription();

	constructor(public authorizationService: authorizationService, public myLoaderService: myLoaderService) {
		console.log('Login page: constructor');
	}

	public ngOnInit() {
		console.log('Login page: ngOnInit');
	}

	public login(event) {
		this.myLoaderService.subject.next(true);

		this.subscription = this.myLoaderService.subject.subscribe({
			next: (data) => {
				this.isLoader = data;
				console.log('Loader. BehaviorSubject: ' + data)
			}
		});

		if (!this.email || !this.password) {

			this.hasError = true;
			event.preventDefault();

			this.myLoaderService.hideLoader();

			this.subscription = this.myLoaderService.subject.subscribe({
				next: (data) => {
					this.isLoader = false;
					console.log('Loader. BehaviorSubject: ' + data)
				}
			});



		} else {

			this.hasError = false;
			this.hasSuccess = true;
			this.authorizationService.login(this.email, this.password);
			window.location.href = '#/';
		}

	}

	public ngOnDestroy() {
		console.log('Login page: ngOnDestroy');
		this.subscription.unsubscribe();
	}
}

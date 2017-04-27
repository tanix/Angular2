import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { authorizationService } from '../../services';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'login-header',
	templateUrl: 'login.component.html',
	styles: [require('./login.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class LoginHeaderComponent implements OnDestroy {
	private isLogined: boolean = false;
	private userInfo : string;

	private subscription: Subscription = new Subscription();
	private subscriptionLogin: Subscription = new Subscription();

	constructor(public authorizationService: authorizationService) {

		this.subscription = authorizationService.subject.subscribe({
			next: (data) => {
				console.log('Constructor LoginHeaderComponent. BehaviorSubject Login: ' + data.login);

				if(data.email) {
					this.isLogined = data.login; //this.authorizationService.isAuthenticated();
					this.userInfo = data.email; //this.authorizationService.getUserInfo();

					console.log('Constructor LoginHeaderComponent. BehaviorSubject Email: ' + data.email);
				}
			}
		});
	}

	public logOut() {
		this.subscriptionLogin  =  this.authorizationService.logOut().subscribe((data) => console.log(data));

		this.subscription = this.authorizationService.subject.subscribe({
			next: (data) => {
				this.isLogined = data.login;
				console.log('LogOut BehaviorSubject: ' + data.login)
			}
		});
	}

	public ngOnDestroy() {
		console.log('Home page: ngOnDestroy');
		this.subscription.unsubscribe();
		this.subscriptionLogin.unsubscribe();
	}
}

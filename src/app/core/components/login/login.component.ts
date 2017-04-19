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

	constructor(public authorizationService: authorizationService) {

		this.subscription = authorizationService.subject.subscribe({
			next: (data) => {
				if(data) {
					this.isLogined = this.authorizationService.isAuthenticated();
					this.userInfo = this.authorizationService.getUserInfo();
				}
				console.log('Constructor LoginHeaderComponent. BehaviorSubject: ' + data)
			}
		});
	}

	public logOut() {
		this.authorizationService.logOut();
		this.isLogined = this.authorizationService.isAuthenticated();

		this.subscription = this.authorizationService.subject.subscribe({
			next: (data) => {
				console.log('LogOut BehaviorSubject: ' + data)
			}
		});
	}

	public ngOnDestroy() {
		console.log('Home page: ngOnDestroy');
		this.subscription.unsubscribe();
	}
}

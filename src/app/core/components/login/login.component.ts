import {Component, ViewEncapsulation, OnDestroy, DoCheck} from '@angular/core';
import { authorizationService } from '../../services';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { routeParamsService } from '../../services';

@Component({
	selector: 'login-header',
	templateUrl: 'login.component.html',
	styles: [require('./login.component.scss')],
	providers: [ routeParamsService ],
	encapsulation: ViewEncapsulation.None
})
export class LoginHeaderComponent implements OnDestroy, DoCheck {
	public isLogined: boolean = false;
	private userName : string;

	public id: number;


	private subscription: Subscription = new Subscription();
	private subscriptionLogOut: Subscription = new Subscription();
	private subscriptionId: Subscription = new Subscription();

	constructor(public authorizationService: authorizationService, private route: ActivatedRoute, private router: Router, public routeID : routeParamsService) {

		this.subscription = authorizationService.subject.subscribe((data) => {
			console.log('Constructor LoginHeaderComponent. BehaviorSubject Login: ' + data.login);

			if(data.email) {
				this.isLogined = data.login; //this.authorizationService.isAuthenticated();
				this.userName = data.email; //this.authorizationService.getUserInfo();

				console.log('Constructor LoginHeaderComponent. BehaviorSubject Email: ' + this.userName);
			}
		});
	}

	ngDoCheck() {
		this.subscriptionId = this.routeID.subject.subscribe((id) => {
			console.log('Login component course ID : ' + id);
			this.id = id;
		});
	}

	public logOut() {
		this.subscriptionLogOut  =  this.authorizationService.logOut().subscribe((data) => console.log(data));
		this.subscription = this.authorizationService.subject.subscribe((data) => {
			this.isLogined = data.login;
			console.log('LogOut BehaviorSubject: ' + data.login);
		});

		this.router.navigate(['/login']);
	}

	public ngOnDestroy() {
		console.log('Home page: ngOnDestroy');
		this.subscription.unsubscribe();
		this.subscriptionLogOut.unsubscribe();
		this.subscriptionId.unsubscribe();
	}
}

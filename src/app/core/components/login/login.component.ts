import {Component, ViewEncapsulation, OnDestroy, OnInit } from '@angular/core';
import { authorizationService } from '../../services';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { routeParamsService } from '../../services';

@Component({
	selector: 'login-header',
	templateUrl: 'login.component.html',
	styles: [require('./login.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class LoginHeaderComponent implements OnDestroy, OnInit {
	public isLogined: boolean = false;
	private userName : string;

	public id: number;

	private subscription: Subscription = new Subscription();
	private subscriptionLogOut: Subscription = new Subscription();
	private subscriptionId: Subscription = new Subscription();

	constructor(public authorizationService: authorizationService, private route: ActivatedRoute, private router: Router, public routeID : routeParamsService) {
	}

	ngOnInit() {
		this.getLoginedState();
		this.subscriptionId = this.routeID.subject.subscribe((id) => {
			console.log('Login component course ID : ' + id);
			this.id = id;
		});
	}

	public logOut() {
		this.subscriptionLogOut  =  this.authorizationService.logOut().subscribe((data) => {
			this.getLoginedState();
			this.router.navigate(['/login']);
		});
	}

	public getLoginedState() {
		this.subscription = this.authorizationService.subject.subscribe((data) => {
			this.isLogined = data.login; //this.authorizationService.isAuthenticated();

			if(data.email) {
				this.userName = data.email; //this.authorizationService.getUserInfo();
			}
		});
	}

	public ngOnDestroy() {
		console.log('Home page: ngOnDestroy');
		this.subscription.unsubscribe();
		this.subscriptionLogOut.unsubscribe();
		this.subscriptionId.unsubscribe();
	}
}

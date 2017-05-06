import {Component, ViewEncapsulation, OnDestroy, OnInit} from '@angular/core';
import { authorizationService } from '../../services';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

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

	id: number;
	private sub: any;

	private subscription: Subscription = new Subscription();
	private subscriptionLogOut: Subscription = new Subscription();

	constructor(public authorizationService: authorizationService, private route: ActivatedRoute, private router: Router) {

		this.subscription = authorizationService.subject.subscribe({
			next: (data) => {
				console.log('Constructor LoginHeaderComponent. BehaviorSubject Login: ' + data.login);

				if(data.email) {
					this.isLogined = data.login; //this.authorizationService.isAuthenticated();
					this.userName = data.email; //this.authorizationService.getUserInfo();

					console.log('Constructor LoginHeaderComponent. BehaviorSubject Email: ' + this.userName);
				}
			}
		});
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			console.log("==========");
			console.log(this.id);
			console.log("==========");
		});
	}

	public logOut() {
		this.subscriptionLogOut  =  this.authorizationService.logOut().subscribe((data) => console.log(data));

		this.subscription = this.authorizationService.subject.subscribe({
			next: (data) => {
				this.isLogined = data.login;
				console.log('LogOut BehaviorSubject: ' + data.login)
			}
		});

		this.router.navigate(['/login']);
	}

	public ngOnDestroy() {
		console.log('Home page: ngOnDestroy');
		this.subscription.unsubscribe();
		this.subscriptionLogOut.unsubscribe();
		this.sub.unsubscribe();
	}
}

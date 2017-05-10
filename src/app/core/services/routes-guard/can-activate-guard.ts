import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { authorizationService } from '../authorization/authorization.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class canActivateGuard implements CanActivate, OnDestroy  {
	private subscription: Subscription = new Subscription();
	private isLogined : boolean = false;

	constructor(public authorizationService: authorizationService) {
		console.log("canActivateGuard constructor");
	}

	canActivate(): boolean | Observable<boolean> {
		console.log("canActivate method called");

		this.subscription = this.authorizationService.subject.subscribe({
			next: (data) => {
				console.log('canActivateGuard. BehaviorSubject Login: ' + data.login);
				this.isLogined = data.login;
			}
		});

		return Observable.of(this.isLogined);
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}

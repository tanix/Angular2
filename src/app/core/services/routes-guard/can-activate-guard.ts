import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { authorizationService } from '../authorization/authorization.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class canActivateGuard implements CanActivate, OnDestroy  {
	private isLogined : boolean = false;

	constructor(public authorizationService: authorizationService, public router: Router) {
		console.log("canActivateGuard constructor");
	}

	canActivate(): boolean | Observable<boolean> {
		console.log("canActivate method called");

		console.log(localStorage.getItem("email"));

		if(localStorage.getItem("email")) {
			this.isLogined = true;
		} else {
			this.isLogined = false;
		}
		return Observable.of(this.isLogined);
	}

	public ngOnDestroy() {	}

}

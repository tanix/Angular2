import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class canActivateGuard implements CanActivate, OnDestroy  {
	private isLogined : boolean = false;

	constructor(public router: Router) {
		console.log("canActivateGuard constructor");
	}

	canActivate(): boolean | Observable<boolean> {
		console.log("canActivate method called");

		if(localStorage.getItem("email")) {
			this.isLogined = true;
		} else {
			this.isLogined = false;
		}
		return Observable.of(this.isLogined);
	}

	public ngOnDestroy() {	}

}

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class canActivateGuard implements CanActivate {
	constructor() {	 console.log("canActivateGuard called"); }

	canActivate(): boolean | Observable<boolean> {
		console.log("canActivate method called");
		return Observable.of(false);
	}
}

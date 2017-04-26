import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class authorizationService  {
	public subject;
	public  email;

	constructor() {
		this.subject = new BehaviorSubject(false);
		this.setBehaviorSubject();
	}

	public setBehaviorSubject () {
		this.email = localStorage.getItem("email");
		return this.email ? this.subject.next({login: true, email: this.email}) : this.subject.next({login: false});
	}

	public login(email, password) {

		console.log("authorizationService: login");

		if (typeof(Storage) !== "undefined") {
			localStorage.setItem("email", email);
			localStorage.setItem("password", password);
		} else {
			console.warn("Sorry! No Web Storage support..");
		}
	}

	public logOut() {
		console.log("authorizationService: logOut");

		if (typeof(Storage) !== "undefined") {
			localStorage.removeItem("email");
			localStorage.removeItem("password");
			this.subject.next({login: false});

		} else {
			console.warn("Sorry! No Web Storage support..");
		}
	}

	// public isAuthenticated() {
	// 	console.log("authorizationService: isAuthenticated");
	//
	// 	return localStorage.getItem("email") ? true : false;
	// }
	//
	// public getUserInfo() {
	// 	console.log("authorizationService: getUserInfo");
	//
	// 	if (typeof(Storage) !== "undefined") {
	// 		return localStorage.getItem("email");
	//
	// 	} else {
	// 		console.warn("Sorry! No Web Storage support..");
	// 	}
	// }
}

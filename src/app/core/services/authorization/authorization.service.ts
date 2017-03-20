import { Injectable } from '@angular/core';

@Injectable()
export class authorizationService {

	public courseList: Array<any>;
	private authenticated: boolean = false;

	constructor() {
		this.courseList = [];
	}

	public login() {
		console.log("login");
	}

	public logOut() {
		console.log("logOut");
	}

	public isAuthenticated() {
		console.log("isAuthenticated");

		return this.authenticated;
	}

	public getUserInfo() {
		console.log("getUserInfo");

		this.authenticated = true;

	}
}

import { Injectable } from '@angular/core';

@Injectable()
export class authorizationService {

	public courseList: Array<any>;

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
	}

	public getUserInfo() {
		console.log("getUserInfo");
	}
}

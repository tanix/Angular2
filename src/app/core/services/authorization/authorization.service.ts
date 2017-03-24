import { Injectable } from '@angular/core';

@Injectable()
export class authorizationService {

	public courseList: Array<any>;

	constructor() {
		this.courseList = [];
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

		} else {
			console.warn("Sorry! No Web Storage support..");
		}
	}

	public isAuthenticated() {
		console.log("authorizationService: isAuthenticated");

		return (localStorage.getItem("email")) ? true : false;
	}

	public getUserInfo() {
		console.log("authorizationService: getUserInfo");

		if (typeof(Storage) !== "undefined") {
			return localStorage.getItem("email");

		} else {
			console.warn("Sorry! No Web Storage support..");
		}
	}
}

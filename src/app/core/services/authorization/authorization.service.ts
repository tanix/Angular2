import { Injectable } from '@angular/core';

@Injectable()
export class authorizationService {

	public courseList: Array<any>;
	private authenticated: boolean = false;

	constructor() {
		this.courseList = [];
	}

	public login(email, password) {
		console.log("login");

		if (typeof(Storage) !== "undefined") {

			if (!localStorage.getItem("email") && !localStorage.getItem("password")) {

				if(email && password) {
					localStorage.setItem("email", email);
					localStorage.setItem("password", password);
				}
			}

		} else {
			// Sorry! No Web Storage support..
		}
	}

	public logOut() {
		console.log("logOut");

		if (typeof(Storage) !== "undefined") {

			if (localStorage.getItem("email") && localStorage.getItem("password")) {
				localStorage.removeItem("email");
				localStorage.removeItem("password");
			}

		} else {
			// Sorry! No Web Storage support..
		}
	}

	public isAuthenticated() {
		console.log("isAuthenticated");

		return (localStorage.getItem("email") && localStorage.getItem("password")) ? true : false;
	}

	public getUserInfo() {
		console.log("getUserInfo");

		if (typeof(Storage) !== "undefined") {

			if (localStorage.getItem("email")) {
				return localStorage.getItem("email");
			}

		} else {
			// Sorry! No Web Storage support..
		}

	}
}

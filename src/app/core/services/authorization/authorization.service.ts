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

		if (typeof(Storage) !== "undefined") {

			if (!localStorage.getItem("email") && !localStorage.getItem("password")) {
				localStorage.setItem("email", "username@gmail.com");
				localStorage.setItem("password", "123456");
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

	}
}

import { Injectable } from '@angular/core';

@Injectable()
export class authorizationService {

	public courseList: Array<any>;
	private userInfo: string;

	constructor() {
		this.courseList = [];
		this.userInfo = " ";
	}

	public login(email, password) {
		console.log("login");

		if (typeof(Storage) !== "undefined") {

			if (!localStorage.getItem("email") && !localStorage.getItem("password")) {

				if(email && password) {
					localStorage.setItem("email", email);
					localStorage.setItem("password", password);

					this.userInfo = email;
				}
			}

		} else {
			console.warn("Sorry! No Web Storage support..");
		}
	}

	public logOut() {
		console.log("logOut");

		if (typeof(Storage) !== "undefined") {

			if (localStorage.getItem("email") && localStorage.getItem("password")) {
				localStorage.removeItem("email");
				localStorage.removeItem("password");

				this.userInfo = " ";
			}

		} else {
			console.warn("Sorry! No Web Storage support..");
		}
	}

	public isAuthenticated() {
		console.log("isAuthenticated");
		this.userInfo = localStorage.getItem("email");

		return (localStorage.getItem("email") && localStorage.getItem("password")) ? true : false;
	}

	public getUserInfo() {
		console.log("getUserInfo");

		if (typeof(Storage) !== "undefined") {

			if (this.userInfo) {
				return this.userInfo;
			}

		} else {
			console.warn("Sorry! No Web Storage support..");
		}

	}
}

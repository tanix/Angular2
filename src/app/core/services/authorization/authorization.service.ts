import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class authorizationService  {
	public subject;
	public  email;

	private urlCreds = 'http://localhost:6002/creds';
	private headers;
	private options;

	constructor(private http: Http) {
		this.subject = new BehaviorSubject(false);
		this.setBehaviorSubject();

		this.headers = new Headers({ 'Content-Type': 'application/json' });
		this.options = new RequestOptions({ headers: this.headers, withCredentials: false });
	}

	public setBehaviorSubject () {
		this.email = localStorage.getItem("email");

		console.log("setBehaviorSubject: localStorage email " + this.email);
		return this.email ? this.subject.next({login: true, email: this.email}) : this.subject.next({login: false, email: false});
	}

	public login(email?, password?): Observable<any> {
		console.log("authorizationService: login");

		if (typeof(Storage) !== "undefined") {
			console.log("authorizationService: email" + email);
			localStorage.setItem("email", email);
			localStorage.setItem("email", email);

		} else {
			console.warn("Sorry! No Web Storage support..");
		}

		this.setBehaviorSubject();

		return this.http.post(this.urlCreds, JSON.stringify({ username: email, password: password }), this.options)
			.map(res => {
				// if (typeof(Storage) !== "undefined") {
				// 	console.log("authorizationService: email" + email);
				// 	localStorage.setItem("email", email);
				// 	localStorage.setItem("email", email);
				//
				// } else {
				// 	console.warn("Sorry! No Web Storage support..");
				// }
			})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public logOut(): Observable<any>  {
		console.log("authorizationService: logOut");

		localStorage.removeItem("email");
		this.subject.next({login: false});

		return this.http.post(this.urlCreds, JSON.stringify({ username: '', password: '' }), this.options)
			.map(res => {
				// if (typeof(Storage) !== "undefined") {
				// 	localStorage.removeItem("email");
				//
				// } else {
				// 	console.warn("Sorry! No Web Storage support..");
				// }

				console.log(res.json());
			})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
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

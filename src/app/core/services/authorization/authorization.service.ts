import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class authorizationService  {
	public subject;
	public  email;

	private urlCreds = 'http://localhost:6002/creds';
	private userID = 1;

	constructor(private http: Http) {
		this.subject = new BehaviorSubject(false);
		this.getBehaviorSubject();
	}

	public getBehaviorSubject () {
		this.email = localStorage.getItem("email");

		console.log("getBehaviorSubject: localStorage email " + this.email);
		return this.email ? this.subject.next({login: true, email: this.email}) : this.subject.next({login: false, email: false});
	}

	public login(email?, password?): Observable<any> {
		return this.http.post(this.urlCreds, {"email": email, "password": password})
			.map(res => {
				console.log("authorizationService: login");

				if (typeof(Storage) !== "undefined") {
					console.log("authorizationService: email" + email);
					localStorage.setItem("email", email);

				} else {
					console.warn("Sorry! No Web Storage support..");
				}

				this.getBehaviorSubject();
				console.log(" ---- this.http.post ---- ");
				console.log(res._body);
			})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public logOut(): Observable<any>  {
		return this.http.delete(this.urlCreds + '/' + this.userID)
			.map(res => {
				console.log("authorizationService: logOut");

				localStorage.removeItem("email");
				this.subject.next({login: false});

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

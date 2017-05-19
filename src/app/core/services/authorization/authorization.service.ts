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

	public login(email?, password?): Observable<any> {
		return this.http.post(this.urlCreds, {"email": email, "password": password, "token": email+password})
			.map(res => {
				localStorage.setItem("email", email);
				localStorage.setItem("token", email+password);
				this.getBehaviorSubject();

			})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public logOut(): Observable<any>  {
		return this.http.get(this.urlCreds + '?token='+localStorage.getItem("token"))
			.map(res => {
				localStorage.removeItem("token");
				localStorage.removeItem("email");
				this.subject.next({login: false});

			})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public isAuthenticated(data): Observable<any>  {
		data.map(function(a) {
			if (a.token !== localStorage.getItem("token")) {
				localStorage.setItem("token", a.token);
				localStorage.setItem("email", a.email);
			}
		});

		this.getBehaviorSubject();
		return Observable.of(true);
	}


	public getUserInfo(email?, password?): Observable<any>  {
		return this.http.get(this.urlCreds+'?email='+email+'&password='+password)
			.map(res => res.json());
	}

	public getBehaviorSubject () {
		this.email = localStorage.getItem("email");

		console.log("getBehaviorSubject: localStorage email " + this.email);
		return this.email ? this.subject.next({login: true, email: this.email}) : this.subject.next({login: false, email: false});
	}
}

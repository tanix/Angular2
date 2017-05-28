import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { Store } from '@ngrx/store';

@Injectable()
export class authorizationService  {
	public subject;
	public email = "";
	private urlCreds = 'http://localhost:6002/creds';
	authorization: Observable<any>;

	constructor(private http: Http, public store: Store<>) {		
		this.subject = new BehaviorSubject(false);
		this.getBehaviorSubject();
	}

	public login(email?, password?): Observable<any> {
		return this.http.post(this.urlCreds, { "email": email, "password": password, "token": email+password })
			.map(res => {
				localStorage.setItem("token", email+password);
				localStorage.setItem("email", email);

				this.getBehaviorSubject();
			})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public logOut(): Observable<any>  {
		return this.http.get(this.urlCreds + '?token='+localStorage.getItem("token"))
			.map(res => {
				localStorage.removeItem("token");
				localStorage.removeItem("email");
				this.subject.next({ login: false });
			})
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public isAuthenticated(data): Observable<any>  {
		console.log(this.store);

		 this.store.select(state => state.user).subscribe((user)=> {
		 	console.log('user:', user);
		 });

		data.map(function(a) {
			localStorage.setItem("token", a.token);
			localStorage.setItem("email", a.email);
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

import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnInit, OnDestroy } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { Store } from '@ngrx/store';

@Injectable()
export class authorizationService implements OnInit, OnDestroy {
	public subject;
	public email = "";
	public token = "";
	public password = "";
	private urlCreds = 'http://localhost:6002/creds';

	private subscriptionStore: Subscription = new Subscription();

	constructor(private http: Http, public store: Store<>) {		
		this.subject = new BehaviorSubject(false);
		this.getBehaviorSubject();
	}

	public ngOnInit() {
		this.subscriptionStore = this.store.select(state => state.user).subscribe();
	}

	public login(): Observable<any> {
		this.getStoreData();
		let email = this.email, password = this.password, token = this.token;
		return this.http.post(this.urlCreds, { "email": email, "password": password, "token": token })
			.map(res => {			
				localStorage.setItem("token", this.token);
				localStorage.setItem("email", this.email);

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
		this.getStoreData();

		//data.map(function(a) {
			localStorage.setItem("token", this.token);
			localStorage.setItem("email", this.email);
		//});

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

	public getStoreData() {
		this.store.select(state => state.user).subscribe((user)=> {		 	
		 	this.email = user.payload.email;
		 	this.token = user.payload.token;
		 	this.password = user.payload.password;
		});
	}

	public ngOnDestroy() {
		this.subscriptionStore.unsubscribe();
	}
}

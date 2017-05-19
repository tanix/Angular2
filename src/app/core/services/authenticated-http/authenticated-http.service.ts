import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Headers, RequestOptions, Request, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SecureHttpService extends Http {
	headers = new Headers({	'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});

	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		console.log('Extends Http request');
		options = new RequestOptions({ headers: this.headers, withCredentials: false });
		return super.request(url, options);
	}

	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		console.log('Extends Http get');
		options = new RequestOptions({ headers: this.headers, withCredentials: false });
		return super.get(url, options);
	}

	// post(url: string, options?: RequestOptionsArgs, body?:any): Observable<Response> {
	// 	console.log('Extends Http post');
	// 	options = new RequestOptions({ headers: this.headers, withCredentials: false, body: body });
	// 	return super.post(url, options);
	// }
}

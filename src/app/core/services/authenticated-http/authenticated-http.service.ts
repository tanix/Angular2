import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Headers, RequestOptions, Request, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SecureHttpService extends Http {

	constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		console.log('Extends Http request');
		return super.request(url, options);
	}

	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		console.log('EExtends Http get');
		return super.get(url, options);
	}
}

import { Injectable } from '@angular/core';

@Injectable()
export class myLoaderService {

	public isLoader: boolean;

	constructor() {
		this.isLoader = false;
	}

	public showLoader() {
		console.log("showLoader method");
		this.isLoader = true;
		return this.isLoader;
	}

	public hideLoader() {
		console.log("hideLoader method");
		this.isLoader = false;
		return this.isLoader;
	}

}

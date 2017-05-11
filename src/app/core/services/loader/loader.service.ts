import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class myLoaderService {
	public subject;

	constructor() {
		this.subject = new BehaviorSubject({isLoader: false});
	}

	public showLoader() {
		this.subject.next({isLoader: true});
	}

	public hideLoader() {
		this.subject.next({isLoader: false})
	}

}

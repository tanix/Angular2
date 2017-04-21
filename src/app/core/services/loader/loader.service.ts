import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class myLoaderService {
	public subject;

	constructor() {
		this.subject = new BehaviorSubject(false);
	}

	public showLoader() {
		this.subject.next(true);
	}

	public hideLoader() {
		this.subject.next(false)
	}

}

import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class routeParamsService {
	public subject = new BehaviorSubject(0);

	public setRouteId(id) {
		this.subject.next(id);
	}
}

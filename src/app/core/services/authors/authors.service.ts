import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class authorsService  {
    public authors;

	constructor() {
		this.authors = [
			{ 'name' : 'Jim'},
			{ 'name' : 'Alice'},
			{ 'name' : 'Tom'},
			{ 'name' : 'Max'},
			{ 'name' : 'Alex'},
		]
	}

	public getAuthors() {
		console.log("authorsService: getAuthors");
		return this.authors;
	}
}

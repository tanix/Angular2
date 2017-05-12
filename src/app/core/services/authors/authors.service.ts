import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class authorsService  {
    public authors;

	constructor() {
		this.authors = [
			{
				"id": 9935,
				"firstName": "Karla",
				"lastName": "Carr"
			},
			{
				"id": 771,
				"firstName": "Harriett",
				"lastName": "Norman"
			},
			{
				"id": 4007,
				"firstName": "Rochelle",
				"lastName": "Adams"
			},
			{
				"id": 1492,
				"firstName": "Rosemarie",
				"lastName": "Boyd"
			},
			{
				"id": 4664,
				"firstName": "Ellison",
				"lastName": "Love"
			},
			{
				"id": 363,
				"firstName": "Acevedo",
				"lastName": "Kane"
			}
		]
	}

	public getAuthors() {
		console.log("authorsService: getAuthors");
		return this.authors;
	}
}

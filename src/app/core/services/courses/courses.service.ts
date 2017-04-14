import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Course } from './../../interfaces/courses/courses.interface'

@Injectable()
export class coursesService {

	public courseList: Array<any>;
	private url = 'http://localhost:6002/course';

	constructor(private http: Http) {
		this.courseList = [];

	}

	public getList():Observable <Course[]> {
		return this.http.get(this.url).map(res => res.json());
	}

	public createCourse() {
		console.log("createCourse method");
	}

	public getItemById(id: number) {
		console.log("getItemById method");
		for (var item of this.courseList) {
			if(id === item.id) {
				return item;
			}
		}
	}

	public updateItem() {
		console.log("updateItem method");
	}

	public removeItem(id: number) {
		console.log("removeItem method: ", id);

		for (var item of this.courseList) {
			if(id === item.id) {
				this.courseList.splice(this.courseList.indexOf(item), 1);
			}
		}

	}
}

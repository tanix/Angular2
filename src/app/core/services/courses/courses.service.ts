import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Course } from './../../interfaces/courses/courses.interface'

@Injectable()
export class coursesService {

	private url = 'http://localhost:6002/course';
	courses: Course[];
	course: Course;

	constructor(private http: Http) { }

	public getList():Observable <Course[]> {
		return this.http.get(this.url)
			.map(res => res.json());
	}

	public getItemById(id: number):Observable <Course> {
		return this.getList()
			.map(courses => courses.find(course => course.id === id))
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));;
	}

	public removeItem(id: number):Observable <Course[]> {
		console.log("removeItem method: ", id);
		return this.http.delete(this.url + '/' + id)
			.map(res => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public createCourse() {
		console.log("createCourse method");
	}

	public updateItem() {
		console.log("updateItem method");
	}
}

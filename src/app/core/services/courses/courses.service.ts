import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Course } from './../../interfaces/courses/courses.interface'

@Injectable()
export class coursesService {

	private url = 'http://localhost:6002/course';
	courses: Course[];
	course: Course;

	private queryTitle: string;

	constructor(private http: Http) { }

	public getList(start: number, end: number):Observable <Course[]> {
		return this.http.get(this.url +'?_start='+start+'&_end='+end)
			.map(res => res.json());
	}

	public getListByQuery(start: number, end: number, query: string):Observable <Course[]> {
		return this.http.get(this.url +'?_start='+start+'&_end='+end + '&q='+ query)
			.map(res => res.json());
	}

	public removeItem(id: number):Observable <Course[]> {
		console.log("removeItem method: ", id);
		return this.http.delete(this.url + '/' + id)
			.map(res => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public createCourse(course):Observable <Course>  {
		console.log("createCourse method");
		return this.http.post(this.url, course)
			.map(res => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public updateCourse(id, course):Observable <Course>  {
		console.log("updateItem method");
		console.log(course);

		return this.http.put(this.url + '/' + id, course)
			.map(res => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public getCourseById(id):Observable <Course>  {
		console.log("getCourse method");

		return this.http.get(this.url + '/' + id)
			.map(res => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
}

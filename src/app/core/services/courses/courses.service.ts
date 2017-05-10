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

	private queryTitle: string;

	constructor(private http: Http) { }

	public getList(start?: number, end?: number, query?: string):Observable <Course[]> {
		if(query) {
			this.queryTitle = '&q='+ query;
		}
		if (start && end ) {
			return this.http.get(this.url +'?_start='+start+'&_end='+end + this.queryTitle)
				.map(res => res.json());
		} else {
			return this.http.get(this.url)
				.map(res => res.json());
		}
	}

	public getItemById(id: number):Observable <Course> {
		return this.getList()
			.map(courses => courses.find(course => course.id === id))
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public removeItem(id: number):Observable <Course[]> {
		console.log("removeItem method: ", id);
		return this.http.delete(this.url + '/' + id)
			.map(res => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public createCourse(course):Observable <Course>  {
		console.log("createCourse method");
		return this.http.put(this.url, course )
			.map(res => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	public updateCourse(id, course):Observable <Course>  {
		console.log("updateItem method");

		return this.http.put(this.url + '/' + id, course )
			.map(res => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
}

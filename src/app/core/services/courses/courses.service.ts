import { Injectable } from '@angular/core';

@Injectable()
export class coursesService {

	public courseList: Array<any>;

	constructor() {
		this.courseList = [];
	}

	public getList() {
		this.courseList = [
			{
				'id': 7239,
				'title': 'Pawnagra mollit Lorem',
				'createDate': new Date('2013-01-30T23:51:32+00:00'),
				'duration': '1h 28min',
				'description': 'Duis sollicitudin ornare vestibulum. Mauris scelerisque et sapien venenatis efficitur.'
			},
			{
				'id': 8832,
				'title': 'Corpulse ex labore',
				'createDate': new Date('2013-03-04T22:15:38+00:00'),
				'duration': '1h 58min',
				'description': 'Sed varius nunc sit amet finibus mollis. Proin varius egestas turpis in semper. Quisque interdum sem metus, sed tristique tortor consequat ut.'
			},
			{
				'id': 1640,
				'title': 'Cuizine laboris eu',
				'createDate': new Date('2014-03-11T10:05:35+00:00'),
				'duration': '5h 38min',
				'description': 'Sed dictum in enim sed volutpat. Suspendisse eu ornare libero. Proin massa urna, tincidunt sed velit eget, molestie fringilla mi. '
			},
			{
				'id': 7243,
				'title': 'Gink occaecat tempor',
				'createDate': new Date('2013-09-25T11:38:41+00:00'),
				'duration': '10h 38min',
				'description': 'Maecenas nisl nisi, euismod ut nibh sit amet, molestie maximus felis. Morbi a auctor sapien, ac pretium ornpm ci.'
			},
			{
				'id': 3522,
				'title': 'Slambda tempor ad',
				'createDate': new Date('2013-08-13T18:45:23+00:00'),
				'duration': '100h',
				'description': 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent risus orci, hendrerit vitae luctus in, faucibus ut nisi.'
			},
			{
				'id': 5190,
				'title': 'Gushkool ex sit',
				'createDate': new Date('2013-02-13T02:29:18+00:00'),
				'duration': '120h',
				'description': 'Vestibulum pretium erat purus, nec ultrices elit lobortis ut. Quisque bibendum aliquet aliquam. Quisque malesuada cursus est, mattis laoreet tellus pharetra at. '
			},

		];

		return this.courseList;
	}

	public createCourse() {

	}

	public getItemById(id: number) {
		for (var item of this.courseList) {
			if(id === item.id) {
				return item;
			}
		}
	}

	public updateItem() {

	}

	public removeItem(id: number) {
		console.log("RemoveItem method: ", id);

		for (var item of this.courseList) {
			if(id === item.id) {
				this.courseList.splice(item, 1);
			}
		}
	}
}

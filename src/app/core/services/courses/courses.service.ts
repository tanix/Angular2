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
				'createDate': 'Fri Mar 31 2017 02:51:32 GMT+0300',
				'duration': '30',
				'description': 'Duis sollicitudin ornare vestibulum. Mauris scelerisque et sapien venenatis efficitur.',
				'topRated' : true
			},
			{
				'id': 8832,
				'title': 'Corpulse ex labore',
				'createDate': 'Wed Mar 29 2017 GMT+0300 (+03)',
				'duration': '315',
				'description': 'Sed varius nunc sit amet finibus mollis. Proin varius egestas turpis in semper. Quisque interdum sem metus, sed tristique tortor consequat ut.'
			},
			{
				'id': 1640,
				'title': 'Cuizine laboris eu',
				'createDate': 'Wed Apr 12 2017 GMT+0300 (+03)',
				'duration': '315',
				'description': 'Sed dictum in enim sed volutpat. Suspendisse eu ornare libero. Proin massa urna, tincidunt sed velit eget, molestie fringilla mi. '
			},
			{
				'id': 7243,
				'title': 'Gink occaecat tempor',
				'createDate': 'Mon Apr 24 2017 GMT+0300 (+03)',
				'duration': '315',
				'description': 'Maecenas nisl nisi, euismod ut nibh sit amet, molestie maximus felis. Morbi a auctor sapien, ac pretium ornpm ci.',
				'topRated' : true
			},
			{
				'id': 3522,
				'title': 'Slambda tempor ad',
				'createDate': 'Mon Feb 13 2017 05:29:18 GMT+0300 (+03)',
				'duration': '315',
				'description': 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent risus orci, hendrerit vitae luctus in, faucibus ut nisi.'
			},
			{
				'id': 5190,
				'title': 'Gushkool ex sit',
				'createDate': 'Tue Feb 14 2017 05:29:18 GMT+0300 (+03)',
				'duration': '315',
				'description': 'Vestibulum pretium erat purus, nec ultrices elit lobortis ut. Quisque bibendum aliquet aliquam. Quisque malesuada cursus est, mattis laoreet tellus pharetra at. '
			},

		];

		return this.courseList;
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

				console.log(this.courseList);
			}
		}

	}
}

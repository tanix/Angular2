import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
//import { Subscription } from 'rxjs';

//import { TodoService } from '../../core/services';
//import { TodoItem } from '../../core/entities';

@Component({
	selector: 'home',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./home.styles.scss')],
	template: require('./home.template.html')
})

export class HomeComponent implements OnInit, OnDestroy {
	//  private todoServiceSubscription: Subscription;
	private isLoading: boolean = true;
	public courseList: Array<any>;

	constructor() {
		console.log('Home page constructor');
		this.courseList = [];
	}

	public ngOnInit() {
		console.log('Home page init');

		this.isLoading = false;
		// this.todoServiceSubscription = this.todoService.getTodoItems().subscribe((res: TodoItem[]) => {
			// 	this.courseList = res;
			// 	this.isLoading = false;
		// });

		this.courseList = [
			{
				'id': 7239,
				'title': 'Pawnagra mollit Lorem',
				'startDate': new Date('2013-01-30T23:51:32+00:00'),
				'endDate': new Date('2014-07-29T11:02:04+00:00'),
				'duration': '1h 28min',
				'description': 'Duis sollicitudin ornare vestibulum. Mauris scelerisque et sapien venenatis efficitur.'
			},
			{
				'id': 8832,
				'title': 'Corpulse ex labore',
				'subTitle': 'adipisicing elit deserunt',
				'startDate': '2013-03-04T22:15:38+00:00',
				'duration': '1h 58min',
				'description': 'Sed varius nunc sit amet finibus mollis. Proin varius egestas turpis in semper. Quisque interdum sem metus, sed tristique tortor consequat ut.'
			},
			{
				'id': 1640,
				'title': 'Cuizine laboris eu',
				'startDate': '2014-03-11T10:05:35+00:00',
				'endDate': '2013-08-29T13:00:54+00:00',
				'duration': '5h 38min',
				'description': 'Sed dictum in enim sed volutpat. Suspendisse eu ornare libero. Proin massa urna, tincidunt sed velit eget, molestie fringilla mi. '
			},
			{
				'id': 7243,
				'title': 'Gink occaecat tempor',
				'startDate': '2013-09-25T11:38:41+00:00',
				'endDate': '2013-12-30T22:50:39+00:00',
				'duration': '10h 38min',
				'description': 'Maecenas nisl nisi, euismod ut nibh sit amet, molestie maximus felis. Morbi a auctor sapien, ac pretium orci.'
			},
			{
				'id': 3522,
				'title': 'Slambda tempor ad',
				'startDate': '2013-08-13T18:45:23+00:00',
				'endDate': '2013-10-18T21:52:44+00:00',
				'duration': '100h',
				'description': 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent risus orci, hendrerit vitae luctus in, faucibus ut nisi.'
			},
			{
				'id': 5190,
				'title': 'Gushkool ex sit',
				'startDate': '2013-02-13T02:29:18+00:00',
				'endDate': '2014-12-26T07:35:54+00:00',
				'duration': '120h',
				'description': 'Vestibulum pretium erat purus, nec ultrices elit lobortis ut. Quisque bibendum aliquet aliquam. Quisque malesuada cursus est, mattis laoreet tellus pharetra at. '
			},

		];
	}

	public ngOnDestroy() {
		console.log('Home page ngOnDestroy');
	}

	public deleteCourseItem($event) {
		console.log($event);
	}
}

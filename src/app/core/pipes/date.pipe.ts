import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sortByCreatedDate'
})
export class sortByCreatedDatePipe implements PipeTransform {
	transform(allTasks: any[]) {
		allTasks.sort((a: any, b: any) => {
			let aDate = Number(new Date(a.createDate));
			let bDate = Number(new Date(b.createDate));
			return bDate - aDate;
		});
		return allTasks;
	}
}

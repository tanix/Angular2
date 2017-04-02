import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sortByCreatedDate'
})
export class sortByCreatedDatePipe implements PipeTransform {
	transform(allTasks: any[]) {
		if (!allTasks)
		{
			return allTasks
		}
		return allTasks.filter(item => item.createDate);
	}
}

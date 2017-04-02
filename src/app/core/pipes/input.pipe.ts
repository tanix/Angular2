import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'sortByInput'
})
export class sortByInputPipe implements PipeTransform {
	transform(allTasks: any[], courseQuery: string) {
		if (!allTasks || !courseQuery)
		{
			return allTasks
		}
		return allTasks.filter((item) => (item.title).toLowerCase().match(courseQuery.toLowerCase()));
	}
}

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'orderByDate'
})
export class orderByDatePipe implements PipeTransform {
	transform(allTasks: any[]) {
		if (!allTasks)
		{
			return allTasks
		}

		return allTasks.sort((a: any, b: any) => {
			let aDate = Number(new Date(a.date));
			let bDate = Number(new Date(b.date));
			return aDate- bDate;
		});
	}
}

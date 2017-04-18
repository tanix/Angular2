import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'duration'
})
export class durationPipe implements PipeTransform {
	transform( minutes: number) {
		let m, h;

		if(minutes < 60) {
			return minutes + 'min';
		} else {
			m = minutes % 60;
			h = (minutes-m)/60;
			return  h.toString() + "h " + m.toString() + 'min';
		}
	}
}

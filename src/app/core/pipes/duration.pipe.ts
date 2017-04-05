import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'duration'
})
export class durationPipe implements PipeTransform {
	transform( minutes: number) {
		if(minutes < 60) {
			return minutes + 'min';
		} else {
			return  Math.round(minutes/60) + 'h ' + (minutes - Math.round(minutes/60)*60) +'min';
		}
	}
}

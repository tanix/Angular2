import { NgModule } from '@angular/core';
import { durationPipe }  from './duration.pipe';

@NgModule({
	imports: [],
	declarations: [durationPipe],
	exports: [durationPipe],
})

export class durationModule {
	static forRoot() {
		return {
			ngModule: durationModule,
			providers: [],
		};
	}
}

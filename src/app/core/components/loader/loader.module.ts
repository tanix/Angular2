import { NgModule } from '@angular/core';
import { loaderComponent } from './loader.component';

@NgModule({
	declarations: [loaderComponent],
	imports: [],
	exports: [loaderComponent]
})
export class LoaderModule {
	constructor() {
	}
}

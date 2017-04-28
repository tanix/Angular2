import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
	NgModule,
	ApplicationRef
} from '@angular/core';
import {
	removeNgStyles,
	createNewHosts,
} from '@angularclass/hmr';
import {
	RouterModule,
	PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { NoContentComponent } from './pages/no-content';

// Components
import { HeaderModule, FooterModule } from './core/components';
import { LoaderModule } from './core/components/loader/loader.module';
import { durationModule }  from './core/pipes/duration.module';

import { XHRBackend, RequestOptions, Http, HttpModule } from '@angular/http';
import { SecureHttpService}  from './core/services/authenticated-http/authenticated-http.service';

// Pages
import { HomeModule } from './pages/home';
import { LoginModule } from './pages/login';
import { PageOneModule } from  './pages/page-one';
import { PageTwoModule } from  './pages/page-two';
import { NewCourseModule } from  './pages/add-edit-course';
// Services

// Application wide providers
const APP_PROVIDERS = [ ];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		NoContentComponent,
	],
	imports: [ // import Angular's modules
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
		HeaderModule,
		FooterModule,
		HomeModule,
		LoginModule,
		PageOneModule,
		PageTwoModule,
		NewCourseModule,
		LoaderModule,
		durationModule
	],
	providers: [{
		provide: Http,
		useFactory: (backend:XHRBackend, defaultOptions:RequestOptions) => {
			return new SecureHttpService(backend, defaultOptions);
		},
		deps: [XHRBackend, RequestOptions]
	}],
})
export class AppModule {

	constructor(public appRef: ApplicationRef) {
	}

	public hmrOnInit(store: any) {
		if (!store || !store.state) { return; }
		this.appRef.tick();
		delete store.state;
	}

	public hmrOnDestroy(store: any) {
		const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
		// recreate elements
		store.disposeOldHosts = createNewHosts(cmpLocation);
		// remove styles
		removeNgStyles();
	}

	public hmrAfterDestroy(store: any) {
		// display new elements
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}

}

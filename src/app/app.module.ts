import { ROUTES } from './app.routes';
import { ENV_PROVIDERS } from './environment';

import { XHRBackend, RequestOptions, Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { RouterModule, PreloadAllModules } from '@angular/router';



import { AppComponent } from './app.component';
import { redirectComponent } from './pages/redirect';
import { HeaderModule, FooterModule } from './core/components';

import { LoaderModule } from './core/components/loader/loader.module';
import { durationModule }  from './core/pipes/duration.module';
import { HomeModule } from './pages/home';
import { LoginModule } from './pages/login';
import { NewCourseModule } from  './pages/add-edit-course';

import { SecureHttpService}  from './core/services/authenticated-http/authenticated-http.service';

import { canActivateGuard, canDeactivateGuard }  from './core/services/routes-guard';

// Application wide providers
const APP_PROVIDERS = [canActivateGuard, canDeactivateGuard ];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		redirectComponent,
	],
	imports: [ // import Angular's modules
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules} ),
		HeaderModule,
		FooterModule,
		HomeModule,
		LoginModule,
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
	}, APP_PROVIDERS],
	exports: [
		RouterModule
	]
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

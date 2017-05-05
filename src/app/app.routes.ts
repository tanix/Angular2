import {Routes, CanActivateChild} from '@angular/router';
import { LoginComponent} from './pages/login';
import { HomeComponent } from './pages/home';
import { NewCourseComponent } from './pages/add-edit-course';
import { redirectComponent } from './pages/redirect';

import { canActivateGuard, canDeactivateGuard }  from './core/services/routes-guard';

export const ROUTES: Routes = [
	{ path: '', redirectTo: 'courses', pathMatch: 'full'},

	{ path: 'login', component: LoginComponent },
	{ path: 'courses', component: HomeComponent, pathMatch: 'full'
		// children: [
		// 	{ path: 'new', component: NewCourseComponent },
		// 	{ path: 'course/:id', component: NewCourseComponent , data: { 'security_key' : 'key_here'} },
		// ]
	},


	// { path: 'courses/new', component: NewCourseComponent , canActivate: [ canActivateGuard ], canDeactivate: [canDeactivateGuard]},
	 { path: 'courses/new', component: NewCourseComponent },
	 { path: 'courses/course/:id', component: NewCourseComponent , data: { 'security_key' : 'key_here'} },

	// Redirect to
	{ path: 'courses/course/:id', redirectTo: 'course/:id', pathMatch: 'full' },
	{ path: 'courses/new', redirectTo: 'new', pathMatch: 'full' },

	{ path: '**', component: redirectComponent },
];

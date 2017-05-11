import { Routes, CanActivateChild, RouterModule } from '@angular/router';
import { LoginComponent} from './pages/login';
import { HomeComponent } from './pages/home';
import { NewCourseComponent } from './pages/add-edit-course';
import { redirectComponent } from './pages/redirect';

import { canActivateGuard, canDeactivateGuard }  from './core/services/routes-guard';

export const ROUTES: Routes = [
	{ path: '', redirectTo: 'courses', pathMatch: 'full'},

	{ path: 'login', component: LoginComponent },
	{ path: 'courses', component: HomeComponent, pathMatch: 'full', canActivate: [canActivateGuard]
		// children: [
		// 	{ path: 'new', component: NewCourseComponent, canActivate: [canActivateGuard] },
		// 	{ path: 'course/:id', component: NewCourseComponent , data: { 'security_key' : 'key_here'}, canActivate: [canActivateGuard] },
		// ]
	},

	{ path: '**', component: redirectComponent, canActivate: [canActivateGuard]}
];

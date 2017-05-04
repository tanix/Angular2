import { Routes } from '@angular/router';
import { LoginComponent} from './pages/login';
import { HomeComponent } from './pages/home';
import { redirectComponent } from './pages/redirect';

export const ROUTES: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },

	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },

	// Redirect to
	{ path: 'redirect', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: redirectComponent },
];

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }    from './login.component';

// Route Configuration
const homeRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
];

export const routes = RouterModule.forChild(homeRoutes);

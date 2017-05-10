import { Routes, RouterModule } from '@angular/router';
import { NewCourseComponent }   from './add-edit-course.component';
import { canActivateGuard, canDeactivateGuard }  from '../../core/services/routes-guard';

// Route Configuration
const homeRoutes: Routes = [
	{ path: 'courses/new', component: NewCourseComponent, canActivate: [canActivateGuard]},
	{ path: 'courses/course/:id', component: NewCourseComponent , canActivate: [canActivateGuard], data: { 'security_key' : 'key_here'} },
];

export const routes = RouterModule.forChild(homeRoutes);

import { Routes, RouterModule } from '@angular/router';
import { NewCourseComponent }   from './add-edit-course.component';

// Route Configuration
const homeRoutes: Routes = [
	{ path: 'courses/new', component: NewCourseComponent },
	{ path: 'courses/course/:id', component: NewCourseComponent , data: { 'security_key' : 'key_here'} },
];

export const routes = RouterModule.forChild(homeRoutes);

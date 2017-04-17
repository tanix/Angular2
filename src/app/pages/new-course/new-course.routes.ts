import { Routes, RouterModule } from '@angular/router';
import { NewCourseComponent }    from './new-course.component';

// Route Configuration
const homeRoutes: Routes = [
	{ path: 'newcourse', component: NewCourseComponent },
];

export const routes = RouterModule.forChild(homeRoutes);

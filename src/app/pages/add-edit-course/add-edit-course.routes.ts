import { Routes, RouterModule } from '@angular/router';
import { NewCourseComponent }    from './add-edit-course.component';

// Route Configuration
const homeRoutes: Routes = [
	{ path: 'course', component: NewCourseComponent },
];

export const routes = RouterModule.forChild(homeRoutes);

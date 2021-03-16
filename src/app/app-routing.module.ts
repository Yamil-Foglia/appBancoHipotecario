import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/shared/login/login.component';
import { AssignmentComponent } from './views/student/assignment/assignment.component';
import { DashboardComponent } from './views/teacher/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'student/assignment', component: AssignmentComponent},
  {path: 'teacher/dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

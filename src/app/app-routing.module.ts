import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/shared/login/login.component';
import { AssigmentListComponent } from './views/student/assigment-list/assigment-list.component';
import { AssignmentComponent } from './views/student/assignment/assignment.component';
import { DashboardComponent } from './views/teacher/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'student/assignment', component: AssignmentComponent},
  {path: 'student/assignment/list', component: AssigmentListComponent},
  {path: 'teacher/dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

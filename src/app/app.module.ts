import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/shared/login/login.component';
import { AssignmentComponent } from './views/student/assignment/assignment.component';
import { DashboardComponent } from './views/teacher/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssigmentListComponent } from './views/student/assigment-list/assigment-list.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		AssignmentComponent,
		DashboardComponent,
		AssigmentListComponent,
	],
	imports: [
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireFunctionsModule,
        AngularFirestoreModule,
        ToastrModule.forRoot(),
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

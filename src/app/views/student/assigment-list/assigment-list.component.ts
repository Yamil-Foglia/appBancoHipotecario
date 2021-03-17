import { Component, OnInit } from '@angular/core';
import { IAssignment } from 'src/app/core/entities';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
	selector: 'app-assigment-list',
	templateUrl: './assigment-list.component.html',
	styleUrls: ['./assigment-list.component.scss']
})
export class AssigmentListComponent implements OnInit {

	public assignmentList: IAssignment[];


	constructor(private db: AssignmentsService) { }

	ngOnInit(): void {
		this.getAllAssignments();
	}

	private async getAllAssignments(): Promise<void> {
		this.assignmentList = await this.db.getAll_sync_total();
	}
}

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

	public alumnList: string[];

	public alumnSelected: boolean = false;

	public alumn: string;

	constructor(private db: AssignmentsService) { }

	ngOnInit(): void {
		this.getAlumns();
	}

	private async getAlumns(): Promise<void> {
		this.alumnList = [];
		let assigmentList = await this.db.getAssignment_sync();

		for(let assigment of assigmentList){
			this.addAlumn(assigment.alumn);
		}
	}

	private addAlumn(alumnParameter: string){
		var flag: boolean = true;
		for(let alumn of this.alumnList){
			if(alumn == alumnParameter){
				flag = false;
				break;
			}
		}

		if(flag)
			this.alumnList.push(alumnParameter);
	}

	public selectAlumn(): void {
		this.getAllAssignments();
		this.alumnSelected = true;
	}

	private async getAllAssignments(): Promise<void> {
		this.assignmentList = await this.db.getAssignmentsByAlumn_sync(this.alumn);
	}
}

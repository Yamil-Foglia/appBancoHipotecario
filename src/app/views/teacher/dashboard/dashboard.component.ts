import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Assignments, IAssignment, Teachers } from 'src/app/core/entities';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	public teacherList: string[];
	public teacher: string;
	public teacherSelected: boolean = true;
	public selectAssignments: boolean = false;
	
	public assigment: Assignments; 

	public assigmentList: IAssignment[];

	constructor(private db: AssignmentsService) { }

	ngOnInit(): void {
		this.teacherList = Object.values(Teachers).map(value => value);
	}

	public selectTeacher(): void {
		this.teacherSelected = false;
	}

	public checkAssignments(): void {
		switch(this.teacher){
			case Teachers.EmanuelFernandez:
			case Teachers.FedericoDavila:
				this.assigment = Assignments.Matematicas;
				break;
			case Teachers.JosefinaRojas:
			case Teachers.LauraFoglia: 
				this.assigment = Assignments.Estadistica;
				break;
			case Teachers.LorenaLago:
			case Teachers.MariaGonzalez:
				this.assigment = Assignments.Programacion;
				break;
			case Teachers.MarioHernandez:
			case Teachers.MartaTicoli:
				this.assigment = Assignments.Literatura;
				break;
			case Teachers.OscarLema:
			case Teachers.PedroHerrera:
				this.assigment = Assignments.Laboratorio;
				break;
		}
		this.selectAssignments = true;
		this.getAssignments();
	}

	private async getAssignments(): Promise<void> {
		this.assigmentList = await this.db.getByAssignments_sync(this.assigment);
	}
}

import { Component, OnInit } from '@angular/core';
import { Assignments, Days, IAssignment, State, Teachers, Turn } from 'src/app/core/entities';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssignmentsService } from 'src/app/services/assignments.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-assignment',
	templateUrl: './assignment.component.html',
	styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

	public assignmentList: string[];
	public turnList: string[];
	public teacherList: string[];
	public dayList: string[];

	public assignmentSelect: boolean = false;

	public assignmentForm: FormGroup;
	
	public alumnControl: FormControl = new FormControl('', [Validators.required]);
	public assignmentControl: FormControl = new FormControl('', [Validators.required]);
	public turnControl: FormControl = new FormControl('', [Validators.required]);
	public teacherControl: FormControl = new FormControl('', [Validators.required]);
	public dayControl: FormControl = new FormControl('', [Validators.required]);

	constructor(private db: AssignmentsService, private toastr: ToastrService, private router: Router) { }

	ngOnInit(): void {
		this.initialize();
	}

	private initialize(): void {
		this.buildLists();
		this.assignmentForm = new FormGroup({
			'alumn': this.alumnControl,
			'assignment': this.assignmentControl,
			'turn': this.turnControl,
			'teacher': this.teacherControl,
			'day': this.dayControl,
		});
	}

	private buildLists(): void {
		this.assignmentList = Object.values(Assignments).map(value => value);
		this.turnList = Object.values(Turn).map(value => value);
	}

	public selectAssignment(): void {
		this.assignmentSelect = true;

		this.teacherList = [];
		this.dayList = [];

		switch(this.assignmentControl.value){
			case Assignments.Matematicas:
				this.teacherList.push(Teachers.EmanuelFernandez);
				this.teacherList.push(Teachers.FedericoDavila);
				this.dayList.push(Days.Lunes);
				this.dayList.push(Days.Jueves);
				break;
			case Assignments.Estadistica:
				this.teacherList.push(Teachers.JosefinaRojas);
				this.teacherList.push(Teachers.LauraFoglia);
				this.dayList.push(Days.Martes);
				this.dayList.push(Days.Viernes);
				break;
			case Assignments.Programacion:
				this.teacherList.push(Teachers.LorenaLago);
				this.teacherList.push(Teachers.MariaGonzalez);
				this.dayList.push(Days.Miercoles);
				this.dayList.push(Days.Lunes);
				break;
			case Assignments.Literatura:
				this.teacherList.push(Teachers.MarioHernandez);
				this.teacherList.push(Teachers.MartaTicoli);
				this.dayList.push(Days.Jueves);
				this.dayList.push(Days.Martes);
				break;
			case Assignments.Laboratorio:
				this.teacherList.push(Teachers.OscarLema);
				this.teacherList.push(Teachers.PedroHerrera);
				this.dayList.push(Days.Viernes);
				this.dayList.push(Days.Miercoles);
				break;
		}
	}


	public createAssignment(): void {
		var assignment: IAssignment = {
			alumn: this.alumnControl.value,
			assignment: this.assignmentControl.value as Assignments,
			teacher: this.teacherControl.value as Teachers,
			day: this.dayControl.value as Days,
			turn: this.turnControl.value as Turn,
			state: State.EnEspera,
			firebaseTimestamp: Date.now(),
			firebaseId:'',
		}

		this.db.add(assignment)
			.then(() => {
				this.toastr.success('', 'Materia asignada con éxito', {
					timeOut: 5000,
					positionClass: 'toast-bottom-right',
				});
			})
			.catch(() => {
				this.toastr.error('', 'Se produjo un conflicto al asignar la materia.', {
					timeOut: 5000,
					positionClass: 'toast-bottom-right',
				});
			})
			.finally(() => {
				this.router.navigate(['/student/assignment/list']);
			})
	}

	public goToList(): void {
		this.router.navigate(['/student/assignment/list']);
	}

}

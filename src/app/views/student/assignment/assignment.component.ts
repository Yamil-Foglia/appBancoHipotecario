import { Component, OnInit } from '@angular/core';
import { Assignments, Days, IAssignment, Teachers, Turn } from 'src/app/core/entities';
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

	public assignmentForm: FormGroup;
	
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
			'assignment': this.assignmentControl,
			'turn': this.turnControl,
			'teacher': this.teacherControl,
			'day': this.dayControl,
		});
	}

	private buildLists(): void {
		this.assignmentList = Object.values(Assignments).map(value => value);
		this.turnList = Object.values(Turn).map(value => value);
		this.teacherList = Object.values(Teachers).map(value => value);
		this.dayList = Object.values(Days).map(value => value);
	}

	public createAssignment(): void {
		var assignment: IAssignment = {
			assignment: this.assignmentControl.value as Assignments,
			teacher: this.teacherControl.value as Teachers,
			day: this.dayControl.value as Days,
			turn: this.turnControl.value as Turn
		}

		this.db.add(assignment)
			.then(() => {
				this.toastr.success('', 'Materia asignada con éxito', {
					timeOut: 5000,
					positionClass: 'toast-bottom-right',
				});
				this.router.navigate(['/']);
			})
			.catch(() => {
				this.toastr.error('', 'Se produjo un conflicto al asignar la materia.', {
					timeOut: 5000,
					positionClass: 'toast-bottom-right',
				});
			})
	}

}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IAssignment, State } from '../core/entities';
import { Helpers } from '../core/helpers';

@Injectable({
	providedIn: 'root'
})
export class AssignmentsService {

	constructor(private db: AngularFirestore) { }

    public add(assignment: IAssignment): Promise<unknown> {
        return this.db.collection('assignments').add(Helpers.convertToObject(assignment));
    }

    public getAssignment_sync(): Promise<IAssignment[]> {
        return this.db.collection('assignments', ref => ref.orderBy('firebaseTimestamp', 'asc')).get().toPromise()
            .then(query => {
                let assignments: IAssignment[] = [];
                query.docs.forEach(doc => {
                    let assignment = doc.data() as IAssignment;
                    assignment.firebaseId = doc.id;
                    assignments.push(assignment);
                });
                return assignments;
            });
    }

    public getAssignmentsByAlumn_sync(alumn: string): Promise<IAssignment[]> {
        return this.db.collection('assignments', ref => ref.where('alumn', '==', alumn)).get().toPromise()
            .then(query => {
                let assignments: IAssignment[] = [];
                query.docs.forEach(doc => {
                    let assignment = doc.data() as IAssignment;
                    assignment.firebaseId = doc.id;
                    assignments.push(assignment);
                });
                return assignments;
            });
    }

    public getAssignmentsByTeacher_sync(teacher: string): Promise<IAssignment[]> {
        return this.db.collection('assignments', ref => ref.where('teacher', '==', teacher)).get().toPromise()
            .then(query => {
                let assignments: IAssignment[] = [];
                query.docs.forEach(doc => {
                    let assignment = doc.data() as IAssignment;
                    assignment.firebaseId = doc.id;
                    assignments.push(assignment);
                });
                return assignments;
            });
    }
    
    public changeState(firebaseId: string, state: State) {
        return this.db.collection('assignments').doc(firebaseId).update({
            state: state
        });
    }

}

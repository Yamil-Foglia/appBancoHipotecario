import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IAssignment } from '../core/entities';
import { Helpers } from '../core/helpers';

@Injectable({
	providedIn: 'root'
})
export class AssignmentsService {

	constructor(private db: AngularFirestore) { }

    public add(assignment: IAssignment): Promise<unknown> {
        return this.db.collection('assignments').add(Helpers.convertToObject(assignment));
    }

	public getAll_sync_total(): Promise<IAssignment[]> {
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

    public getByAssignments_sync(assignment: string): Promise<IAssignment[]> {
        return this.db.collection('assignments', ref => ref.where('assignment', '==', assignment)).get().toPromise()
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

}

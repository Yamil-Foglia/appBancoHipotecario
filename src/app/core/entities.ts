export interface IFirebaseObject {
    firebaseId?: string;
    firebaseTimestamp?: number;
}

export enum TurnType {
    Mañana = 'Mañana',
    Tarde = 'Tarde',
    Noche = 'Noche',
}

export interface IAssignment extends IFirebaseObject {
    assignment: string;
    teacher: string; 
    day: string;
    turn: TurnType; 
}
export interface IFirebaseObject {
    firebaseId?: string;
    firebaseTimestamp?: number;
}

export enum Turn {
    Mañana = 'Mañana',
    Tarde = 'Tarde',
    Noche = 'Noche',
}

export enum Assignments {
    Matematicas = 'Matematicas',
    Estadistica = 'Estadistica',
    Literatura = 'Literatura',
    Programacion = 'Programacion',
    Laboratorio = 'Laboratorio',
}

export enum Days {
    Lunes = 'Lunes',
    Martes = 'Martes',
    Miercoles = 'Miercoles',
    Jueves = 'Jueves',
    Viernes = 'Viernes',
}

export enum Teachers {
    OscarLema = 'Oscar Lema',
    EmanuelFernandez = 'Emanuel Fernandez',
    MariaGonzalez = 'Maria Gonzalez',
    LauraFoglia = 'Laura Foglia',
    PedroHerrera = 'Pedro Herrera',
    MarioHernandez = 'Mario Hernandez',
    FedericoDavila = 'Federico Davila',
    MartaTicoli = 'Marta Ticoli',
    LorenaLago = 'Lorena Lago',
    JosefinaRojas = 'Josefina Rojas',
}

export enum State {
    Aprobado = 'Aprobado',
    Rechazado = 'Rechazado',
    EnEspera = 'En espera',
}
export interface IAssignment extends IFirebaseObject {
    alumn: string;
    assignment: Assignments;
    teacher: Teachers; 
    day: Days;
    turn: Turn; 
    state: State;
}





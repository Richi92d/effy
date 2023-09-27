import { Typelogement } from "../enum/type-logement.enum";

export interface Project {
    type: Typelogement;
    nbrPers: number;
    revenu: number;
    surface: number;
}
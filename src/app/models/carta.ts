import { Classe } from "../utils/classe.enum";
import { Tipo } from "../utils/tipo.enum";

export class Carta {
	id?: number;
	nome?: string;
	descricao?: string;
	ataque?: number;
	defesa?: number;
	tipo?: Tipo | null;
	classe?: Classe | null;
}
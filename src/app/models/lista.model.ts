import { ListaItem } from './lista-item.model';


export class Lista {
    id: number;
    tittle: string;
    creadaEn: Date;
    terminadaEN: Date;
    terminada: boolean;
    items: ListaItem[];
    constructor(tittle: string) {
        this.tittle = tittle;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}
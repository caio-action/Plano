import { Valor } from './valor';
export declare class ValorService {
    valor: Valor[];
    getAll(): Valor[];
    getById(id: number): Valor;
}

import { Plano } from './plano';
export declare class PlanoService {
    plano: Plano[];
    getAll(): Plano[];
    getById(id: number): Plano;
}

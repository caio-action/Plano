import { Preço } from './preço';
export declare class PreçoService {
    preço: Preço[];
    getAll(): Preço[];
    getById(id: number): Preço;
}

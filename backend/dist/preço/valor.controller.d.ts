import { Valor } from './shared/valor';
import { ValorService } from './shared/valor.service';
export declare class ValorController {
    private valorService;
    constructor(valorService: ValorService);
    getAll(): Promise<Valor[]>;
    getById(id: any): Promise<Valor>;
}

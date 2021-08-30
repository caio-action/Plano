import { Preço } from './shared/valor';
import { PreçoService } from './shared/valor.service';
export declare class PreçoController {
    private preçoService;
    constructor(preçoService: PreçoService);
    getAll(): Promise<Preço[]>;
    getById(id: any): Promise<Preço>;
}

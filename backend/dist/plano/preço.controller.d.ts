import { Preço } from './shared/preço';
import { PreçoService } from './shared/preço.service';
export declare class PreçoController {
    private preçoService;
    constructor(preçoService: PreçoService);
    getAll(): Promise<Preço[]>;
    getById(id: any): Promise<Preço>;
}

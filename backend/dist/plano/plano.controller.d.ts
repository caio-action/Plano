import { Plano } from './shared/plano';
import { PlanoService } from './shared/plano.service';
export declare class PlanoController {
    private planoService;
    constructor(planoService: PlanoService);
    getAll(): Promise<Plano[]>;
    getById(id: number): Promise<Plano>;
}

import { Plano } from './shared/plano';
import { PlanoService } from './shared/plano.service';
export declare class PlanoController {
    private planoService;
    private: any;
    constructor(planoService: PlanoService);
    getAll(): Promise<Plano[]>;
}

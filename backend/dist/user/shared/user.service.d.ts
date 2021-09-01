import { User } from './user';
import { PlanoService } from 'src/plano/shared/plano.service';
export declare class UserService {
    private planoService;
    constructor(planoService: PlanoService);
    user: User[];
    getAll(): User[];
    getById(id: any): User;
    userData(user: any): unknown[];
}

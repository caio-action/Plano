import { UserService } from './shared/user.service';
import { User } from './shared/user';
export declare class UsersController {
    private userService;
    user: any;
    constructor(userService: UserService);
    getAll(): Promise<User[]>;
    userData(user: User): Promise<User>;
}

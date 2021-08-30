import { UserService } from './shared/user.service';
import { User } from './shared/user';
export declare class UsersController {
    private userService;
    usersService: any;
    constructor(userService: UserService);
    getAll(): Promise<User[]>;
    getById(id: number): Promise<User>;
    create(user: User): Promise<User>;
}

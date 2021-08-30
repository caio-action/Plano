import { User } from './user';
export declare class UserService {
    users: User[];
    getAll(): User[];
    getById(id: number): User;
    create(user: User): User;
    update(user: any): User;
    delete(id: number): void;
}

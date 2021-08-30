import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
    users: User[] = [

              {id: 1, name: 'Matheus Santos', idade: 10 },
              {id: 2, name: 'Caio Cavalcante', idade: 35 },                
              {id: 3, name: 'Renato Bastos', idade: 80 },
            ];
            getAll() {
                return this.users;
            }
            getById(id: number) {
                const product = this.users.find((value) => value.id == id);
                return product;
            }
            create(user: User) {
                let lastId = 0;
                if (this.users.length > 0) {
                    lastId = this.users[this.users.length - 1].id;
                }
                user.id = lastId + 1;
                this.users.push(user);
        
                return user;
        
            }
            update(user: any) {
                const userArray = this.getById(user.id);
                if (userArray) {
                    userArray.name = user.name;
                    userArray.idade = user.idade;
                }
                return userArray;
            }
            delete(id: number) {
                const index = this.users.findIndex((value ) => value.id == id);
                this.users.splice(index, 1);
            }
        }
        



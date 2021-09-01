import { Inject, Injectable } from '@nestjs/common';
import { User } from './user';
import { PlanoService } from 'src/plano/shared/plano.service';

@Injectable()
export class UserService {

    constructor(private planoService: PlanoService) { }

    user: User[] = [
        
        { id: 1, nome: 'Matheus Santos', idade: 10, reg: "reg1" },
        { id: 2, nome: 'Caio Cavalcante', idade: 35, reg: "reg2" },
        { id: 3, nome: 'Renato Bastos', idade: 80, reg: "reg3" },
    ];


    getAll() {
        return this.user;

    }
    getById(id: any) {
        const product = this.user.find((value) => value.id == id);
        return product;
    }
    
    
    userData(user: any) {
        const Data = this.user.map(user.reg[0])
        return Data

    }
    
    // create(user: User) {
    //     let lastId = 0;
    //     if (this.users.length > 0) {
    //         lastId = this.users[this.users.length - 1].id;
    //     }
    //     user.id = lastId + 1;
    //     this.users.push(user);

    //     return user;

    // }



    // update(user: any) {
    //     const userArray = this.getById(user.id);
    //     if (userArray) {
    //         userArray.nome = user.name;
    //         userArray.idade = user.idade;
    //     }
    //     return userArray;
    // }
    // delete(id: number) {
    //     const index = this.users.findIndex((value ) => value.id == id);
    //     this.users.splice(index, 1);
}





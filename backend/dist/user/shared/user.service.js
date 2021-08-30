"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.users = [
            { id: 1, name: 'Matheus Santos', idade: 10 },
            { id: 2, name: 'Caio Cavalcante', idade: 35 },
            { id: 3, name: 'Renato Bastos', idade: 80 },
        ];
    }
    getAll() {
        return this.users;
    }
    getById(id) {
        const product = this.users.find((value) => value.id == id);
        return product;
    }
    create(user) {
        let lastId = 0;
        if (this.users.length > 0) {
            lastId = this.users[this.users.length - 1].id;
        }
        user.id = lastId + 1;
        this.users.push(user);
        return user;
    }
    update(user) {
        const userArray = this.getById(user.id);
        if (userArray) {
            userArray.name = user.name;
            userArray.idade = user.idade;
        }
        return userArray;
    }
    delete(id) {
        const index = this.users.findIndex((value) => value.id == id);
        this.users.splice(index, 1);
    }
};
UserService = __decorate([
    common_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const plano_service_1 = require("../../plano/shared/plano.service");
let UserService = class UserService {
    constructor(planoService) {
        this.planoService = planoService;
        this.user = [
            { id: 1, nome: 'Matheus Santos', idade: 10, reg: "reg1" },
            { id: 2, nome: 'Caio Cavalcante', idade: 35, reg: "reg2" },
            { id: 3, nome: 'Renato Bastos', idade: 80, reg: "reg3" },
        ];
    }
    getAll() {
        return this.user;
    }
    getById(id) {
        const product = this.user.find((value) => value.id == id);
        return product;
    }
    userData(user) {
        const Data = this.user.map(user.reg[0]);
        return Data;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [plano_service_1.PlanoService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
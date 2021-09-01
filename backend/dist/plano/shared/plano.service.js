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
exports.PlanoService = void 0;
const common_1 = require("@nestjs/common");
let PlanoService = class PlanoService {
    constructor() {
        this.plano = [
            { id: 1, nome: "Bitix Customer Plano 1", codigo: 1, reg: "reg1" },
            { id: 2, nome: "Bitix Customer Plano 2", codigo: 2, reg: "reg2" },
            { id: 3, nome: "Bitix Customer Plano 3", codigo: 3, reg: "reg3" },
            { id: 4, nome: "Bitix Customer Plano 4", codigo: 4, reg: "reg4" },
            { id: 5, nome: "Bitix Customer Plano 5", codigo: 5, reg: "reg5" },
            { id: 6, nome: "Bitix Customer Plano 6", codigo: 6, reg: "reg6" },
        ];
    }
    getAll() {
        return this.plano;
    }
};
PlanoService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], PlanoService);
exports.PlanoService = PlanoService;
//# sourceMappingURL=plano.service.js.map
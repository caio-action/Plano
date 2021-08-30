"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreçoService = void 0;
const common_1 = require("@nestjs/common");
let PreçoService = class PreçoService {
    constructor() {
        this.preço = [
            { id: 1, minimo_vidas: 1, faixa1: 10.00, faixa2: 12, faixa3: 15.00 },
            { id: 1, minimo_vidas: 4, faixa1: 9.00, faixa2: 11.00, faixa3: 14.00 },
            { id: 2, minimo_vidas: 1, faixa1: 20.00, faixa2: 30, faixa3: 40.00 },
            { id: 2, minimo_vidas: 4, faixa1: 19.00, faixa2: 29, faixa3: 39.00 },
            { id: 3, minimo_vidas: 1, faixa1: 30, faixa2: 40.00, faixa3: 50 },
            { id: 3, minimo_vidas: 4, faixa1: 29.00, faixa2: 39, faixa3: 49.00 },
            { id: 4, minimo_vidas: 1, faixa1: 40.00, faixa2: 50.00, faixa3: 60 },
            { id: 4, minimo_vidas: 4, faixa1: 39.00, faixa2: 49.00, faixa3: 59 },
            { id: 5, minimo_vidas: 1, faixa1: 50, faixa2: 60.00, faixa3: 70.00 },
            { id: 5, minimo_vidas: 3, faixa1: 49, faixa2: 59.00, faixa3: 69.00 },
            { id: 6, minimo_vidas: 1, faixa1: 60, faixa2: 70, faixa3: 80 },
            { id: 6, minimo_vidas: 2, faixa1: 55.00, faixa2: 65.00, faixa3: 75.00 },
        ];
    }
    getAll() {
        return this.preço;
    }
    getById(id) {
        const preço = this.preço.find((value) => value.id == id);
        return preço;
    }
};
PreçoService = __decorate([
    common_1.Injectable()
], PreçoService);
exports.PreçoService = PreçoService;
//# sourceMappingURL=pre%C3%A7o.service.js.map
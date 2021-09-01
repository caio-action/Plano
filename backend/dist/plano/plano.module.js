"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanoModule = void 0;
const common_1 = require("@nestjs/common");
const plano_controller_1 = require("./plano.controller");
const plano_service_1 = require("./shared/plano.service");
let PlanoModule = class PlanoModule {
};
PlanoModule = __decorate([
    common_1.Module({
        controllers: [plano_controller_1.PlanoController],
        providers: [plano_service_1.PlanoService],
        exports: [plano_service_1.PlanoService]
    })
], PlanoModule);
exports.PlanoModule = PlanoModule;
//# sourceMappingURL=plano.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreçoModule = void 0;
const common_1 = require("@nestjs/common");
const pre_o_controller_1 = require("./pre\u00E7o.controller");
const pre_o_service_1 = require("./shared/pre\u00E7o.service");
let PreçoModule = class PreçoModule {
};
PreçoModule = __decorate([
    common_1.Module({
        controllers: [pre_o_controller_1.PreçoController],
        providers: [pre_o_service_1.PreçoService]
    })
], PreçoModule);
exports.PreçoModule = PreçoModule;
//# sourceMappingURL=pre%C3%A7o.module.js.map
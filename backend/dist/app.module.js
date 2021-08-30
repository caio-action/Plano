"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const plano_module_1 = require("./plano/plano.module");
const valor_controller_1 = require("./valor/valor.controller");
const valor_service_1 = require("./valor/shared/valor.service");
const valor_module_1 = require("./valor/valor.module");
const users_module_1 = require("./user/users.module");
const users_1 = require("./user/users");
const user_service_1 = require("./user/shared/user.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [plano_module_1.PlanoModule, valor_module_1.ValorModule, users_module_1.UsersModule,],
        controllers: [app_controller_1.AppController, valor_controller_1.ValorController, users_1.UsersController],
        providers: [app_service_1.AppService, valor_service_1.ValorService, user_service_1.UserService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
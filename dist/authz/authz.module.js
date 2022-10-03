"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthzModule = void 0;
const common_1 = require("@nestjs/common");
const permission_module_1 = require("../entities/permission/permission.module");
const permission_service_1 = require("../entities/permission/permission.service");
const user_module_1 = require("../entities/user/user.module");
const user_service_1 = require("../entities/user/user.service");
const ability_factory_1 = require("./ability.factory");
const authz_controller_1 = require("./authz.controller");
const authz_service_1 = require("./authz.service");
const policy_guard_1 = require("./policy/policy.guard");
let AuthzModule = class AuthzModule {
};
AuthzModule = __decorate([
    (0, common_1.Module)({
        controllers: [authz_controller_1.AuthzController],
        imports: [user_module_1.UserModule, permission_module_1.PermissionModule],
        providers: [
            authz_service_1.AuthzService,
            ability_factory_1.AbilityFactory,
            policy_guard_1.PolicyGuard,
            user_service_1.UserService,
            permission_service_1.PermissionService
        ],
        exports: [authz_service_1.AuthzService, ability_factory_1.AbilityFactory, policy_guard_1.PolicyGuard],
    })
], AuthzModule);
exports.AuthzModule = AuthzModule;
//# sourceMappingURL=authz.module.js.map
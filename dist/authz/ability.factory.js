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
exports.AbilityFactory = void 0;
const common_1 = require("@nestjs/common");
const authz_service_1 = require("./authz.service");
const permission_service_1 = require("../entities/permission/permission.service");
let AbilityFactory = class AbilityFactory {
    constructor(authoService, permission) {
        this.authoService = authoService;
        this.permission = permission;
    }
    async createForUser(user) {
        const dbPermissions = await this.authoService.findAllPermissionsOfUser(user);
    }
};
AbilityFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [authz_service_1.AuthzService,
        permission_service_1.PermissionService])
], AbilityFactory);
exports.AbilityFactory = AbilityFactory;
//# sourceMappingURL=ability.factory.js.map
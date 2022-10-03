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
exports.PolicyGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const ability_factory_1 = require("../ability.factory");
const decorator_1 = require("../decorator");
let PolicyGuard = class PolicyGuard {
    constructor(reflector, abilityFactory) {
        this.reflector = reflector;
        this.abilityFactory = abilityFactory;
    }
    async canActivate(context) {
        const policyHandlers = this.reflector.get(decorator_1.PERMISSION_CHECKER_KEY, context.getHandler()) || [];
        const user = {
            id: 4,
            firstname: "fd",
            lastname: "df",
            email: "df",
            hpassword: "df",
            locale_code: 'en',
            department_id: 3
        };
        if (!user)
            throw new common_1.ForbiddenException();
        const ability = await this.abilityFactory.createForUser(user);
        console.log(ability);
        return true;
    }
    isAllowed(ability, permission) {
        console.log(...permission);
        console.log(ability);
        return (ability.can(...permission));
    }
};
PolicyGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        ability_factory_1.AbilityFactory])
], PolicyGuard);
exports.PolicyGuard = PolicyGuard;
//# sourceMappingURL=policy.guard.js.map
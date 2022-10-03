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
exports.AuthzService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../entities/user/user.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthzService = class AuthzService {
    constructor(user, prisma) {
        this.user = user;
        this.prisma = prisma;
    }
    async findAllPermissionsOfUser(user) {
        return await this.user.findAllPermission(user);
    }
    async findUniqueSubject(id) {
        return await this.prisma.subject.findUnique({
            where: {
                id: id
            }
        });
    }
};
AuthzService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService, prisma_service_1.PrismaService])
], AuthzService);
exports.AuthzService = AuthzService;
//# sourceMappingURL=authz.service.js.map
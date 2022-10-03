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
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PermissionService = class PermissionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPermissionDto) {
        return this.prisma.permission.create({
            data: createPermissionDto
        });
    }
    findAll() {
        return this.prisma.permission.findMany();
    }
    findOne(id) {
        return this.prisma.permission.findUnique({
            where: {
                id: id
            }
        });
    }
    update(id, updatePermissionDto) {
        return this.prisma.permission.update({
            where: {
                id: id
            },
            data: updatePermissionDto
        });
    }
    remove(id) {
        return this.prisma.permission.delete({
            where: {
                id: id
            }
        });
    }
    createSubject(createSubjectDto) {
        return this.prisma.subject.create({
            data: {
                sub: createSubjectDto.sub
            }
        });
    }
    findAllSubjects() {
        return this.prisma.subject.findMany();
    }
    async findOneSubject(id) {
        const su = await this.prisma.subject.findUnique({
            where: {
                id: id
            }
        });
        return su;
    }
    createRolePerm(createRolePermDto) {
        return this.prisma.rolePermission.create({
            data: {
                roleId: createRolePermDto.roleId,
                permissionId: createRolePermDto.permissionId
            }
        });
    }
};
PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PermissionService);
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map
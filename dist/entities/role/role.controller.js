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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role.service");
const create_role_dto_1 = require("./dto/create-role.dto");
const update_role_dto_1 = require("./dto/update-role.dto");
const prisma_service_1 = require("../../prisma/prisma.service");
let RoleController = class RoleController {
    constructor(roleService, prisma) {
        this.roleService = roleService;
        this.prisma = prisma;
    }
    create(createRoleDto) {
        return this.roleService.create(createRoleDto);
    }
    createRoleUser(createRoleUserDto) {
        return this.roleService.createRoleUser(createRoleUserDto);
    }
    findAll() {
        return this.roleService.findAll();
    }
    findAllUsersRoles() {
        return this.roleService.findAllUserRole();
    }
    findOne(id) {
        return this.roleService.findOne(+id);
    }
    update(id, updateRoleDto) {
        return this.roleService.update(+id, updateRoleDto);
    }
    roleUserUpdate(uId, rId, createRoleUserDto) {
        console.log(rId, uId, createRoleUserDto);
        return this.roleService.updateRoleUser(uId, rId, createRoleUserDto);
    }
    remove(id) {
        return this.roleService.remove(+id);
    }
    async dl(uId) {
        this.roleService.deleteRoleUser(+uId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/roleUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleUserDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "createRoleUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('usersRoles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "findAllUsersRoles", null);
__decorate([
    (0, common_1.Get)('role/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('role/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_role_dto_1.UpdateRoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('roleUsers'),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, create_role_dto_1.CreateRoleUserDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "roleUserUpdate", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('roleUser/delete/:uid'),
    __param(0, (0, common_1.Param)('uId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "dl", null);
RoleController = __decorate([
    (0, common_1.Controller)('role'),
    __metadata("design:paramtypes", [role_service_1.RoleService, prisma_service_1.PrismaService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map
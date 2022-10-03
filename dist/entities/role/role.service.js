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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let RoleService = class RoleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createRoleDto) {
        let data = {
            role: createRoleDto.role
        };
        return this.prisma.role.create({
            data: data
        });
    }
    createRoleUser(createRoleUserDto) {
        let data = {
            roleId: createRoleUserDto.roleId,
            userId: createRoleUserDto.userId
        };
        return this.prisma.roleUser.create({
            data: data
        });
    }
    findAll() {
        return this.prisma.role.findMany();
    }
    findOne(id) {
        return this.prisma.role.findUnique({
            where: {
                id: id
            },
            include: {
                permission: {
                    include: {
                        permission: {
                            include: {
                                subject: true
                            }
                        }
                    }
                }
            }
        });
    }
    findAllUserRole() {
        return this.prisma.roleUser.findMany();
    }
    update(id, updateRoleDto) {
        console.log("hi");
        return this.prisma.role.update({
            where: {
                id: id
            },
            data: updateRoleDto
        });
    }
    updateRoleUser(uId, rId, createRoleUserDto) {
        console.log(uId, rId, createRoleUserDto);
    }
    remove(id) {
        return this.prisma.role.delete({
            where: {
                id: id
            }
        });
    }
    async deleteRoleUser(uId) {
        try {
            await this.prisma.users.findUnique({
                where: {
                    id: uId
                },
                include: {
                    role: {
                        include: {
                            role: true
                        }
                    }
                }
            }).then((data) => {
                const RID = data.role.map(r => r.role.id);
                this.prisma.roleUser.delete({
                    where: {
                        roleId_userId: {
                            roleId: RID[0],
                            userId: uId
                        }
                    }
                });
            });
        }
        catch (err) {
            return err;
        }
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map
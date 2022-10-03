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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcryptjs");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
        this.getUsers = () => {
            return this.prisma.users.findMany({
                include: {
                    role: {
                        select: {
                            role: true
                        }
                    }
                }
            });
        };
        this.changePassword = (id, updateUserDto) => {
            const user = this.prisma.users.update({
                where: {
                    id: id
                },
                data: {
                    hpassword: updateUserDto.hpassword,
                }
            });
            console.log(updateUserDto.hpassword);
            return user;
        };
    }
    async createUser(createUserDto) {
        const hash = await bcrypt.hash(createUserDto.hpassword, 10);
        let data = {
            firstname: createUserDto.firstname,
            lastname: createUserDto.lastname,
            email: createUserDto.email,
            hpassword: hash,
            locale_code: "en",
            department_id: createUserDto.department_id
        };
        const user = this.prisma.users.create({
            data: data
        });
        return user;
    }
    async findByEmail(email) {
        return await this.prisma.users.findUnique({
            where: {
                email: email
            }
        });
    }
    async findByUsername(username) {
        return await this.prisma.users.findUnique({
            where: {
                email: username
            },
            include: {
                role: {
                    select: {
                        role: true
                    }
                }
            }
        });
    }
    updateUser(id, updateUserDto) {
        console.log("test");
        console.log(updateUserDto);
        const user = this.prisma.users.update({
            where: {
                id: id
            },
            data: updateUserDto,
        });
        return user;
    }
    findOne(id) {
        return this.prisma.users.findUnique({
            where: { id: id },
            include: {
                role: {
                    select: {
                        role: true
                    }
                }
            }
        });
    }
    async delete(id) {
        try {
            let val = await this.prisma.users.delete({ where: { id: id } });
            return "deleted";
        }
        catch (err) {
            return (err);
        }
    }
    async deleteAll() {
        await this.prisma.users.deleteMany({});
    }
    async findAllPermission(user) {
        let userQuery = {
            where: { id: user.id },
            include: {
                role: {
                    include: {
                        role: {
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
                        }
                    }
                }
            }
        };
        let users = await this.prisma.users.findUnique(userQuery);
        let permissionsResult = [];
        if (users) {
            let roles = users.role;
            roles === null || roles === void 0 ? void 0 : roles.map(oneRole => {
                var _a, _b;
                permissionsResult = (_b = (_a = oneRole.role) === null || _a === void 0 ? void 0 : _a.permission) === null || _b === void 0 ? void 0 : _b.map(onePermission => onePermission.permission);
            });
        }
        return permissionsResult;
    }
    getRoleByUserId(id) {
        return this.prisma.users.findUnique({
            where: {
                id: id
            },
            select: {
                role: {
                    select: {
                        user: true
                    }
                }
            }
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
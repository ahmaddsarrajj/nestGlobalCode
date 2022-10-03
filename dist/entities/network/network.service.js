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
exports.NetworkService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let NetworkService = class NetworkService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(CreateNetworkDto) {
        let data = {
            name: CreateNetworkDto.name,
        };
        const network = this.prisma.network.create({
            data: data
        });
        return network;
    }
    findAll() {
        return this.prisma.network.findMany();
    }
    findOne(id) {
        const network = this.prisma.network.findUnique({
            where: {
                HNC: id
            },
            include: {
                HealthInstituations: {
                    include: {
                        departments: {
                            select: {
                                users: true
                            }
                        }
                    }
                }
            }
        });
        return network;
    }
    update(id, updateNetworkDto) {
        const network = this.prisma.network.update({
            where: {
                HNC: id
            },
            data: updateNetworkDto,
        });
        return network;
    }
    remove(id) {
        return this.prisma.network.delete({
            where: {
                HNC: id
            }
        });
    }
};
NetworkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NetworkService);
exports.NetworkService = NetworkService;
//# sourceMappingURL=network.service.js.map
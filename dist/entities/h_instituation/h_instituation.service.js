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
exports.HInstituationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let HInstituationService = class HInstituationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createHInstituationDto) {
        let data = {
            name: createHInstituationDto.name,
            network_id: createHInstituationDto.network_id,
        };
        const HI = this.prisma.healthInstituation.create({
            data: data
        });
        return HI;
    }
    findAll() {
        return this.prisma.healthInstituation.findMany();
    }
    findOne(id) {
        const HI = this.prisma.healthInstituation.findUnique({
            where: {
                HI: id
            },
            include: {
                departments: {
                    include: {
                        users: true
                    }
                }
            }
        });
        return HI;
    }
    update(id, updateHInstituationDto) {
        const hinstituation = this.prisma.healthInstituation.update({
            where: {
                HI: id
            },
            data: updateHInstituationDto,
        });
        return hinstituation;
    }
    remove(id) {
        return this.prisma.healthInstituation.delete({
            where: {
                HI: id
            }
        });
    }
};
HInstituationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HInstituationService);
exports.HInstituationService = HInstituationService;
//# sourceMappingURL=h_instituation.service.js.map
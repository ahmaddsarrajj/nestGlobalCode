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
exports.HInstituationController = void 0;
const common_1 = require("@nestjs/common");
const h_instituation_service_1 = require("./h_instituation.service");
const create_h_instituation_dto_1 = require("./dto/create-h_instituation.dto");
const update_h_instituation_dto_1 = require("./dto/update-h_instituation.dto");
let HInstituationController = class HInstituationController {
    constructor(hInstituationService) {
        this.hInstituationService = hInstituationService;
    }
    create(createHInstituationDto) {
        return this.hInstituationService.create(createHInstituationDto);
    }
    findAll() {
        return this.hInstituationService.findAll();
    }
    findOne(id) {
        return this.hInstituationService.findOne(+id);
    }
    update(id, updateHInstituationDto) {
        return this.hInstituationService.update(+id, updateHInstituationDto);
    }
    remove(id) {
        return this.hInstituationService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_h_instituation_dto_1.CreateHInstituationDto]),
    __metadata("design:returntype", void 0)
], HInstituationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HInstituationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HInstituationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_h_instituation_dto_1.UpdateHInstituationDto]),
    __metadata("design:returntype", void 0)
], HInstituationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HInstituationController.prototype, "remove", null);
HInstituationController = __decorate([
    (0, common_1.Controller)('h-instituations'),
    __metadata("design:paramtypes", [h_instituation_service_1.HInstituationService])
], HInstituationController);
exports.HInstituationController = HInstituationController;
//# sourceMappingURL=h_instituation.controller.js.map
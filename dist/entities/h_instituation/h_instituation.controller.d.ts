import { HInstituationService } from './h_instituation.service';
import { CreateHInstituationDto } from './dto/create-h_instituation.dto';
import { UpdateHInstituationDto } from './dto/update-h_instituation.dto';
export declare class HInstituationController {
    private readonly hInstituationService;
    constructor(hInstituationService: HInstituationService);
    create(createHInstituationDto: CreateHInstituationDto): import(".prisma/client").Prisma.Prisma__HealthInstituationClient<import(".prisma/client").HealthInstituation>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").HealthInstituation[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__HealthInstituationClient<import(".prisma/client").HealthInstituation & {
        departments: (import(".prisma/client").Department & {
            users: import(".prisma/client").users[];
        })[];
    }>;
    update(id: string, updateHInstituationDto: UpdateHInstituationDto): import(".prisma/client").Prisma.Prisma__HealthInstituationClient<import(".prisma/client").HealthInstituation>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__HealthInstituationClient<import(".prisma/client").HealthInstituation>;
}

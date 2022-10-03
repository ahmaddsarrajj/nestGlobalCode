import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHInstituationDto } from './dto/create-h_instituation.dto';
import { UpdateHInstituationDto } from './dto/update-h_instituation.dto';
export declare class HInstituationService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createHInstituationDto: CreateHInstituationDto): import(".prisma/client").Prisma.Prisma__HealthInstituationClient<import(".prisma/client").HealthInstituation>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").HealthInstituation[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__HealthInstituationClient<import(".prisma/client").HealthInstituation & {
        departments: (import(".prisma/client").Department & {
            users: import(".prisma/client").users[];
        })[];
    }>;
    update(id: number, updateHInstituationDto: UpdateHInstituationDto): import(".prisma/client").Prisma.Prisma__HealthInstituationClient<import(".prisma/client").HealthInstituation>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__HealthInstituationClient<import(".prisma/client").HealthInstituation>;
}

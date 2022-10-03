import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNetworkDto } from './dto/create-network.dto';
import { UpdateNetworkDto } from './dto/update-network.dto';
export declare class NetworkService {
    private prisma;
    constructor(prisma: PrismaService);
    create(CreateNetworkDto: CreateNetworkDto): import(".prisma/client").Prisma.Prisma__NetworkClient<import(".prisma/client").Network>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Network[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__NetworkClient<import(".prisma/client").Network & {
        HealthInstituations: (import(".prisma/client").HealthInstituation & {
            departments: {
                users: import(".prisma/client").users[];
            }[];
        })[];
    }>;
    update(id: number, updateNetworkDto: UpdateNetworkDto): import(".prisma/client").Prisma.Prisma__NetworkClient<import(".prisma/client").Network>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__NetworkClient<import(".prisma/client").Network>;
}

import { NetworkService } from './network.service';
import { CreateNetworkDto } from './dto/create-network.dto';
import { UpdateNetworkDto } from './dto/update-network.dto';
export declare class NetworkController {
    private readonly networkService;
    constructor(networkService: NetworkService);
    create(createNetworkDto: CreateNetworkDto): import(".prisma/client").Prisma.Prisma__NetworkClient<import(".prisma/client").Network>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Network[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__NetworkClient<import(".prisma/client").Network & {
        HealthInstituations: (import(".prisma/client").HealthInstituation & {
            departments: {
                users: import(".prisma/client").users[];
            }[];
        })[];
    }>;
    update(id: string, updateNetworkDto: UpdateNetworkDto): import(".prisma/client").Prisma.Prisma__NetworkClient<import(".prisma/client").Network>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__NetworkClient<import(".prisma/client").Network>;
}
